import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';
import { EXCHANGE_RATES, getFormattedDollarRate } from '@/lib/exchange-rates';
import { whatsappAPI } from '@/lib/whatsapp-api';

// Configurar el cliente de Brevo
const apiInstance = new brevo.TransactionalEmailsApi();
const contactsApiInstance = new brevo.ContactsApi();

// Configurar la autenticación
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);
contactsApiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 QUOTE API: Iniciando procesamiento de presupuesto...');
    const body = await request.json();
    const { nombre, email, telefono, mensaje, items, total, selectedCurrency } = body;
    
    console.log('📋 QUOTE API: Datos recibidos:');
    console.log('📋 QUOTE API: - Nombre:', nombre);
    console.log('📋 QUOTE API: - Email:', email);
    console.log('📋 QUOTE API: - Teléfono:', telefono);
    console.log('📋 QUOTE API: - Items:', items?.length || 0);
    console.log('📋 QUOTE API: - Total:', total);
    console.log('📋 QUOTE API: - Moneda seleccionada:', selectedCurrency || 'ARS');

    // Validar los datos requeridos
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // 1. Agregar/actualizar contacto en Brevo
    const contactData = new brevo.CreateContact();
    contactData.email = email;
    contactData.attributes = {
      FIRSTNAME: nombre,
      LASTNAME: '', // Si tienes apellido en el futuro
    };
    
    // Si tienes una lista específica, agrégala aquí
    if (process.env.BREVO_BUDGET_LIST_ID) {
      contactData.listIds = [parseInt(process.env.BREVO_BUDGET_LIST_ID)];
    }

    try {
      await contactsApiInstance.createContact(contactData);
    } catch (contactError: any) {
      // Si el contacto ya existe, intenta actualizarlo
      if (contactError.status === 400 && contactError.body?.code === 'duplicate_parameter') {
        const updateContact = new brevo.UpdateContact();
        updateContact.attributes = {
          FIRSTNAME: nombre,
        };
        await contactsApiInstance.updateContact(email, updateContact);
      }
    }

    // 2. Crear HTML del presupuesto con formato de precio explícito
    const itemsHtml = items.map((item: any) => {
      const priceInARS = Math.round(item.priceUSD * EXCHANGE_RATES.USD_TO_ARS);
      return `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px; vertical-align: top;">
            <strong>${item.subServiceTitle}</strong><br>
            <span style="color: #666; font-size: 14px;">${item.name}</span><br>
            <span style="color: #999; font-size: 12px;">${item.serviceTitle}</span>
          </td>
          <td style="padding: 12px; text-align: right; vertical-align: top;">
            <strong>US$${item.priceUSD.toLocaleString('en-US')}</strong><br>
            <span style="color: #666; font-size: 12px;">($${priceInARS.toLocaleString('es-AR')} ARS)</span>
          </td>
        </tr>
      `;
    }).join('');

    // 3. Enviar email de presupuesto al administrador
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ 
      email: process.env.BREVO_ADMIN_EMAIL || process.env.BREVO_SENDER_EMAIL!, 
      name: process.env.BREVO_SENDER_NAME 
    }];
    sendSmtpEmail.sender = { email: process.env.BREVO_SENDER_EMAIL!, name: 'Solicitud de Presupuesto' };
    sendSmtpEmail.subject = `Nueva solicitud de presupuesto de ${nombre}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          Nueva Solicitud de Presupuesto
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Información del Cliente:</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
          <p><strong>Moneda seleccionada:</strong> ${selectedCurrency || 'ARS'}</p>
          <p><strong>Valor del dólar actual:</strong> ${getFormattedDollarRate()}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Servicios Solicitados:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Servicio</th>
                <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Precio</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr style="background-color: #f9f9f9; font-weight: bold;">
                <td style="padding: 12px; border-top: 2px solid #ddd;">Total:</td>
                <td style="padding: 12px; text-align: right; border-top: 2px solid #ddd;">
                  <strong>US$${total.toLocaleString('en-US')}</strong><br>
                  <span style="color: #666; font-size: 12px;">($${Math.round(total * EXCHANGE_RATES.USD_TO_ARS).toLocaleString('es-AR')} ARS)</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        ${mensaje ? `
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Mensaje Adicional:</h3>
          <p style="line-height: 1.6; color: #666;">${mensaje.replace(/\n/g, '<br>')}</p>
        </div>
        ` : ''}
        
             <div style="margin-top: 30px; padding: 15px; background-color: #e5f3ff; border-radius: 8px;">
               <p style="margin: 0; color: #0066cc; font-size: 14px;">
                 <strong>💡 Tip:</strong> Puedes responder directamente a este email para contactar al cliente.
               </p>
             </div>

             <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
               <p style="margin: 0; color: #856404; font-size: 14px;">
                 <strong>⏰ Recordatorio:</strong> El presupuesto que envíes será válido por 30 días a partir de hoy. 
                 Informa al cliente sobre esta validez en tu respuesta.
               </p>
             </div>
        
        ${telefono ? `
        <div style="margin-top: 20px; padding: 20px; background-color: #f0f9ff; border-radius: 8px; text-align: center;">
          <h3 style="color: #1e40af; margin-top: 0;">📱 Enviar WhatsApp</h3>
          <p style="color: #1e40af; margin-bottom: 20px;">
            Envía un mensaje de WhatsApp al cliente con el resumen del presupuesto
          </p>
          <a href="https://wa.me/${telefono.replace(/[\s\-\(\)]/g, '').replace('+', '')}?text=${encodeURIComponent(whatsappAPI.generateQuoteMessage({nombre, items, total, selectedCurrency: selectedCurrency || 'ARS'}))}" 
             style="background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
            📱 Enviar WhatsApp a ${nombre}
          </a>
          <p style="color: #64748b; font-size: 12px; margin-top: 10px;">
            Teléfono: ${telefono}
          </p>
        </div>
        ` : ''}
      </div>
    `;
    sendSmtpEmail.replyTo = { email: email, name: nombre };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // 4. Enviar email de confirmación al cliente
    const confirmationEmail = new brevo.SendSmtpEmail();
    confirmationEmail.to = [{ email: email, name: nombre }];
    confirmationEmail.sender = { email: process.env.BREVO_SENDER_EMAIL!, name: process.env.BREVO_SENDER_NAME };
    confirmationEmail.subject = 'Presupuesto solicitado - Confirmación recibida';
    confirmationEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">¡Presupuesto Solicitado!</h1>
        </div>
        
        <div style="padding: 30px; background-color: #fff; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
            Hola <strong>${nombre}</strong>,
          </p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Hemos recibido tu solicitud de presupuesto y queremos agradecerte por confiar en nosotros. 
            Tu consulta es muy importante para nosotros.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #333; margin-top: 0;">📋 Resumen de tu solicitud:</h3>
            <p style="margin: 5px 0;"><strong>Servicios:</strong> ${items.length} ${items.length === 1 ? 'servicio' : 'servicios'}</p>
            <p style="margin: 5px 0;"><strong>Total estimado:</strong> ${selectedCurrency === 'ARS' ? `$${Math.round(total * EXCHANGE_RATES.USD_TO_ARS).toLocaleString('es-AR')} ARS` : `US$${total.toLocaleString('en-US')}`}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Servicios Solicitados:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f5f5f5;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Servicio</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #ddd;">Precio</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr style="background-color: #f9f9f9; font-weight: bold;">
                  <td style="padding: 12px; border-top: 2px solid #ddd;">Total:</td>
                  <td style="padding: 12px; text-align: right; border-top: 2px solid #ddd;">
                    <strong>US$${total.toLocaleString('en-US')}</strong><br>
                    <span style="color: #666; font-size: 12px;">($${Math.round(total * EXCHANGE_RATES.USD_TO_ARS).toLocaleString('es-AR')} ARS)</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Nos pondremos en contacto contigo lo antes posible, generalmente dentro de las próximas 24 horas.
            Te enviaremos un presupuesto detallado con todas las opciones disponibles.
          </p>
          
          <div style="background-color: #fff3cd; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #856404; margin-top: 0;">⏰ Validez del Presupuesto</h3>
            <p style="color: #856404; margin: 0; line-height: 1.6;">
              <strong>Este presupuesto es válido por 30 días</strong> a partir de la fecha de envío. 
              Si no contratas el servicio dentro de este plazo, el presupuesto perderá validez y 
              deberás solicitar uno nuevo.
            </p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💰 Opciones de Pago Detalladas</h3>
            <p style="color: #666; margin-bottom: 15px;">
              Te ofrecemos diferentes opciones de pago para que elijas la que mejor se adapte a tu situación:
            </p>
            
            <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #28a745;">
              <h4 style="color: #28a745; margin-top: 0;">🎯 Corto Plazo (Recomendado)</h4>
              <p style="margin: 5px 0;"><strong>Plazo:</strong> 2 meses</p>
              <p style="margin: 5px 0;"><strong>Interés:</strong> 0% (Sin intereses)</p>
              <p style="margin: 5px 0;"><strong>Depósito:</strong> 15% al contratar</p>
              <p style="margin: 5px 0;"><strong>Monto final:</strong> 100% del precio del servicio</p>
            </div>

            <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #ffc107;">
              <h4 style="color: #856404; margin-top: 0;">📅 Mediano Plazo</h4>
              <p style="margin: 5px 0;"><strong>Plazo:</strong> 6 meses</p>
              <p style="margin: 5px 0;"><strong>Interés:</strong> 25%</p>
              <p style="margin: 5px 0;"><strong>Depósito:</strong> 15% al contratar</p>
              <p style="margin: 5px 0;"><strong>Monto final:</strong> 130% del precio del servicio</p>
            </div>

            <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #dc3545;">
              <h4 style="color: #dc3545; margin-top: 0;">📆 Largo Plazo</h4>
              <p style="margin: 5px 0;"><strong>Plazo:</strong> 12 meses</p>
              <p style="margin: 5px 0;"><strong>Interés:</strong> 40%</p>
              <p style="margin: 5px 0;"><strong>Depósito:</strong> 15% al contratar</p>
              <p style="margin: 5px 0;"><strong>Monto final:</strong> 150% del precio del servicio</p>
            </div>

            <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #0066cc; font-weight: bold;">
                💡 Ejemplo: Si el servicio cuesta $350.000 ARS
              </p>
              <div style="display: flex; justify-content: space-around; margin-top: 10px; font-size: 14px;">
                <div style="color: #28a745;"><strong>Corto:</strong> $350.000</div>
                <div style="color: #856404;"><strong>Mediano:</strong> $455.000</div>
                <div style="color: #dc3545;"><strong>Largo:</strong> $525.000</div>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-sitio.com'}" 
               style="background-color: #f59e0b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Visitar nuestro sitio web
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px; margin-bottom: 0;">
            Si tienes alguna pregunta urgente, puedes contactarnos directamente respondiendo a este email.
          </p>
          
          <p style="color: #999; font-size: 14px; margin-top: 20px;">
            Saludos cordiales,<br>
            <strong>${process.env.BREVO_SENDER_NAME}</strong>
          </p>
        </div>
      </div>
    `;

    await apiInstance.sendTransacEmail(confirmationEmail);

    // 5. WhatsApp automático (DRAFT - Desactivado temporalmente)
    // TODO: Reactivar cuando se resuelva el conflicto con WhatsApp personal
    console.log('📱 WHATSAPP AUTO: Desactivado temporalmente (DRAFT)');
    console.log('📱 WHATSAPP AUTO: Generando mensaje para envío manual...');
    
    if (telefono) {
      const whatsappMessage = whatsappAPI.generateQuoteMessage({
        nombre,
        items,
        total,
        selectedCurrency: selectedCurrency || 'ARS'
      });
      console.log('📱 WHATSAPP MANUAL: Mensaje generado para envío manual');
      console.log('📱 WHATSAPP MANUAL: Cliente:', nombre);
      console.log('📱 WHATSAPP MANUAL: Teléfono:', telefono);
      console.log('📱 WHATSAPP MANUAL: Moneda:', selectedCurrency || 'ARS');
      console.log('📱 WHATSAPP MANUAL: Mensaje:', whatsappMessage);
    } else {
      console.log('ℹ️ WHATSAPP MANUAL: No se proporcionó número de teléfono');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Presupuesto solicitado correctamente. Te contactaremos pronto.' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error en API de presupuesto:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
