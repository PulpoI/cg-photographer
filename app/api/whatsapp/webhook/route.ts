import { NextRequest, NextResponse } from 'next/server';

// Webhook para recibir mensajes de WhatsApp
// Documentación: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  // Verificar el webhook
  if (mode === 'subscribe' && token === process.env.WHATSAPP_WEBHOOK_TOKEN) {
    console.log('WhatsApp webhook verified');
    return new NextResponse(challenge);
  }

  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Procesar mensajes entrantes
    if (body.object === 'whatsapp_business_account') {
      body.entry?.forEach((entry: any) => {
        entry.changes?.forEach((change: any) => {
          if (change.field === 'messages') {
            const messages = change.value.messages;
            
            messages?.forEach((message: any) => {
              if (message.type === 'text') {
                const from = message.from;
                const text = message.text.body;
                
                console.log(`WhatsApp message from ${from}: ${text}`);
                
                // Aquí puedes agregar lógica para responder automáticamente
                // Por ejemplo, si el cliente pregunta por el presupuesto
                if (text.toLowerCase().includes('presupuesto') || 
                    text.toLowerCase().includes('precio') ||
                    text.toLowerCase().includes('costo')) {
                  
                  // Responder con información básica
                  const responseMessage = `¡Hola! 👋\n\nGracias por tu mensaje. Te hemos enviado un presupuesto detallado por email.\n\nSi no lo recibiste, por favor revisa tu carpeta de spam o contáctanos directamente.\n\n¡Estamos aquí para ayudarte! 📸✨`;
                  
                  // Aquí enviarías la respuesta usando la API de WhatsApp
                  // whatsappAPI.sendMessage(from, responseMessage);
                }
              }
            });
          }
        });
      });
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
