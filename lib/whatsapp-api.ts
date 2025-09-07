// WhatsApp Business API integration
// Documentación: https://developers.facebook.com/docs/whatsapp/cloud-api

interface WhatsAppMessage {
  messaging_product: string;
  to: string;
  type: 'text';
  text: {
    body: string;
  };
}

interface WhatsAppResponse {
  messaging_product: string;
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
}

export class WhatsAppAPI {
  private accessToken: string;
  private phoneNumberId: string;
  private baseUrl: string;

  constructor() {
    this.accessToken = process.env.WHATSAPP_ACCESS_TOKEN!;
    this.phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID!;
    this.baseUrl = `https://graph.facebook.com/v18.0/${this.phoneNumberId}/messages`;
  }

  async sendMessage(to: string, message: string): Promise<WhatsAppResponse> {
    const payload: WhatsAppMessage = {
      messaging_product: 'whatsapp',
      to: to,
      type: 'text',
      text: {
        body: message
      }
    };

    console.log('📱 WHATSAPP API: URL:', this.baseUrl);
    console.log('📱 WHATSAPP API: Payload:', JSON.stringify(payload, null, 2));
    
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('📱 WHATSAPP API: Status:', response.status);
    console.log('📱 WHATSAPP API: Headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const error = await response.text();
      console.error('📱 WHATSAPP API: Error response:', error);
      throw new Error(`WhatsApp API error: ${error}`);
    }

    const result = await response.json();
    console.log('📱 WHATSAPP API: Success response:', JSON.stringify(result, null, 2));
    return result;
  }

  formatPhoneNumber(phone: string): string {
    // Remover espacios, guiones y paréntesis
    let cleaned = phone.replace(/[\s\-\(\)]/g, '');
    
    // Si no tiene código de país, agregar +54 (Argentina)
    if (!cleaned.startsWith('+')) {
      if (cleaned.startsWith('54')) {
        cleaned = '+' + cleaned;
      } else {
        cleaned = '+54' + cleaned;
      }
    }
    
    // Remover el + para la API
    return cleaned.replace('+', '');
  }

  generateQuoteMessage(data: {
    nombre: string;
    items: Array<{
      subServiceTitle: string;
      name: string;
      serviceTitle: string;
      priceUSD: number;
    }>;
    total: number;
  }): string {
    const { nombre, items, total } = data;
    const totalARS = Math.round(total * 1300); // Usar tasa actual

    let message = `¡Hola ${nombre}! 👋\n\n`;
    message += `¡Muchas gracias por contactarnos y solicitar un presupuesto! 🙏\n\n`;
    message += `Hemos recibido tu solicitud y queremos agradecerte por confiar en nosotros. Tu consulta es muy importante para nosotros.\n\n`;
    message += `📋 *Resumen de tu solicitud:*\n`;
    message += `• Servicios: ${items.length} ${items.length === 1 ? 'servicio' : 'servicios'}\n`;
    message += `• Total estimado: US$${total.toLocaleString('en-US')} ($${totalARS.toLocaleString('es-AR')} ARS)\n\n`;
    
    message += `📸 *Servicios solicitados:*\n`;
    items.forEach((item, index) => {
      const priceARS = Math.round(item.priceUSD * 1300);
      message += `${index + 1}. *${item.subServiceTitle} - ${item.name}*\n`;
      message += `   ${item.serviceTitle}\n`;
      message += `   US$${item.priceUSD.toLocaleString('en-US')} ($${priceARS.toLocaleString('es-AR')} ARS)\n\n`;
    });
    
    message += `💰 *Total: US$${total.toLocaleString('en-US')} ($${totalARS.toLocaleString('es-AR')} ARS)*\n\n`;
    message += `⏰ *¿Qué sigue ahora?*\n`;
    message += `• Te enviaremos un email de confirmación con todos los detalles\n`;
    message += `• Nos pondremos en contacto contigo dentro de las próximas 24 horas\n`;
    message += `• Te enviaremos un presupuesto detallado con todas las opciones disponibles\n\n`;
    message += `Si tienes alguna pregunta urgente, puedes responder a este mensaje o contactarnos directamente.\n\n`;
    message += `¡Saludos cordiales! 📸✨\n`;
    message += `Camila - Fotógrafa Profesional`;

    return message;
  }
}

export const whatsappAPI = new WhatsAppAPI();
