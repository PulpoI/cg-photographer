# Configuración de WhatsApp Business API - AUTOMATIZACIÓN COMPLETA

## 🚀 **Configuración gratuita (hasta 1,000 mensajes/mes)**

> **¡IMPORTANTE!** Esta configuración te permite usar tu número actual de WhatsApp y enviar mensajes automáticamente sin intervención manual.

### **Paso 1: Crear cuenta de desarrollador de Meta**
1. Ve a [developers.facebook.com](https://developers.facebook.com)
2. Crea una cuenta de desarrollador
3. Verifica tu identidad

### **Paso 2: Crear aplicación de WhatsApp Business**
1. En el dashboard de Meta for Developers
2. Click "Crear App" → "Business" → "WhatsApp Business"
3. Completa la información de tu aplicación

### **Paso 3: Configurar tu número actual de WhatsApp**
1. En tu app, ve a "WhatsApp" → "Getting Started"
2. **Agrega tu número actual** (el que ya usas en WhatsApp)
3. Verifica el número con el código SMS
4. **¡Tu número se convierte automáticamente en WhatsApp Business!**
5. **Todas tus conversaciones actuales se mantienen**

### **Paso 4: Obtener credenciales**
1. **Access Token**: En "WhatsApp" → "Getting Started" → "Access Token"
2. **Phone Number ID**: En "WhatsApp" → "Getting Started" → "Phone Number ID"

### **Paso 5: Configurar variables de entorno**
Agrega estas variables a tu `.env.local`:

```env
# WhatsApp Business API - AUTOMATIZACIÓN COMPLETA
WHATSAPP_ACCESS_TOKEN=tu_access_token_aqui
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id_aqui
```

> **¡Eso es todo!** Una vez configurado, los mensajes se enviarán automáticamente cuando alguien solicite un presupuesto.

## 📱 **Ejemplo de mensaje que se enviará:**

```
¡Hola Juan! 👋

¡Muchas gracias por contactarnos y solicitar un presupuesto! 🙏

Hemos recibido tu solicitud y queremos agradecerte por confiar en nosotros. Tu consulta es muy importante para nosotros.

📋 Resumen de tu solicitud:
• Servicios: 2 servicios
• Total estimado: US$150 ($195,000 ARS)

📸 Servicios solicitados:
1. Sesión de Fotos - Premium
   Bodas
   US$100 ($130,000 ARS)

2. Sesión de Fotos - Básico
   Infantiles
   US$50 ($65,000 ARS)

💰 Total: US$150 ($195,000 ARS)

⏰ ¿Qué sigue ahora?
• Te enviaremos un email de confirmación con todos los detalles
• Nos pondremos en contacto contigo dentro de las próximas 24 horas
• Te enviaremos un presupuesto detallado con todas las opciones disponibles

Si tienes alguna pregunta urgente, puedes responder a este mensaje o contactarnos directamente.

¡Saludos cordiales! 📸✨
Camila - Fotógrafa Profesional
```

## 🔧 **Configuración avanzada (opcional)**

### **Webhook para recibir mensajes**
Si quieres recibir respuestas automáticamente:

1. En tu app de Meta, ve a "WhatsApp" → "Configuration"
2. Configura el webhook URL: `https://tu-dominio.com/api/whatsapp/webhook`
3. Verifica el webhook con el token que configures

### **Plantillas de mensaje**
Para mensajes más profesionales, puedes crear plantillas:

1. Ve a "WhatsApp" → "Message Templates"
2. Crea plantillas para diferentes tipos de mensajes
3. Usa las plantillas en lugar de mensajes de texto libre

## 💰 **Límites gratuitos**

- **1,000 mensajes/mes** gratis
- **Después**: $0.005 USD por mensaje
- **Para tu volumen**: Completamente gratuito

## 🚨 **Importante**

- **Solo funciona si el cliente proporciona teléfono**
- **Si WhatsApp falla, el presupuesto sigue funcionando** (no bloquea el proceso)
- **Los mensajes se envían desde tu número de WhatsApp Business**
- **El cliente puede responder directamente a tu WhatsApp**

## 🧪 **Pruebas**

Para probar sin enviar mensajes reales:

1. Usa el número de prueba de Meta
2. O configura un webhook de desarrollo
3. Verifica los logs en la consola de Vercel

## 📞 **Soporte**

Si tienes problemas:
- [Documentación oficial de WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [Meta for Developers Support](https://developers.facebook.com/support/)
