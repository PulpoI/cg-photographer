import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

// Configurar el cliente de Brevo
const apiInstance = new brevo.TransactionalEmailsApi();
const contactsApiInstance = new brevo.ContactsApi();

// Configurar la autenticación
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);
contactsApiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validar los datos requeridos
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
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
    if (process.env.BREVO_CONTACT_LIST_ID) {
      contactData.listIds = [parseInt(process.env.BREVO_CONTACT_LIST_ID)];
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

    // 2. Enviar email de notificación al administrador
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ 
      email: process.env.BREVO_ADMIN_EMAIL || process.env.BREVO_SENDER_EMAIL!, 
      name: process.env.BREVO_SENDER_NAME 
    }];
    sendSmtpEmail.sender = { email: process.env.BREVO_SENDER_EMAIL!, name: 'Formulario de Contacto' };
    sendSmtpEmail.subject = `Nuevo mensaje de contacto: ${asunto}`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          Nuevo Mensaje de Contacto
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Información del Cliente:</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Asunto:</strong> ${asunto}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Mensaje:</h3>
          <p style="line-height: 1.6; color: #666;">${mensaje.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e5f3ff; border-radius: 8px;">
          <p style="margin: 0; color: #0066cc; font-size: 14px;">
            <strong>💡 Tip:</strong> Puedes responder directamente a este email para contactar al cliente.
          </p>
        </div>
      </div>
    `;
    sendSmtpEmail.replyTo = { email: email, name: nombre };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // 3. Enviar email de bienvenida al cliente
    const welcomeEmail = new brevo.SendSmtpEmail();
    welcomeEmail.to = [{ email: email, name: nombre }];
    welcomeEmail.sender = { email: process.env.BREVO_SENDER_EMAIL!, name: process.env.BREVO_SENDER_NAME };
    welcomeEmail.replyTo = { email: process.env.BREVO_ADMIN_EMAIL || process.env.BREVO_SENDER_EMAIL!, name: process.env.BREVO_SENDER_NAME };
    welcomeEmail.subject = '¡Gracias por contactarnos! - Confirmación recibida';
    welcomeEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">¡Gracias por contactarnos!</h1>
        </div>
        
        <div style="padding: 30px; background-color: #fff; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
            Hola <strong>${nombre}</strong>,
          </p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Hemos recibido tu mensaje sobre "<strong>${asunto}</strong>" y queremos agradecerte por contactarnos. 
            Tu consulta es muy importante para nosotros.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #333; margin-top: 0;">📋 Resumen de tu consulta:</h3>
            <p style="margin: 5px 0;"><strong>Asunto:</strong> ${asunto}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Nos pondremos en contacto contigo lo antes posible, generalmente dentro de las próximas 24 horas. 
            Mientras tanto, te invitamos a conocer más sobre nuestros servicios en nuestro sitio web.
          </p>
          
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

    await apiInstance.sendTransacEmail(welcomeEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error en API de contacto:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
