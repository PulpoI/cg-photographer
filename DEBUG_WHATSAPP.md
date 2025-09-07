# Debug de WhatsApp - Guía de Logs

## 🚀 **Configuración de Debug**

### **Variables de entorno necesarias:**
```env
# WhatsApp Business API
WHATSAPP_ACCESS_TOKEN=tu_access_token_aqui
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id_aqui
```

### **Logs que verás:**

#### **1. Inicio del proceso:**
```
🚀 QUOTE API: Iniciando procesamiento de presupuesto...
📋 QUOTE API: Datos recibidos:
📋 QUOTE API: - Nombre: Juan
📋 QUOTE API: - Email: juan@email.com
📋 QUOTE API: - Teléfono: +54 9 11 1234-5678
📋 QUOTE API: - Items: 2
📋 QUOTE API: - Total: 150
```

#### **2. Emails desactivados:**
```
📧 EMAIL ADMIN: Desactivado temporalmente para debug
📧 EMAIL CLIENTE: Desactivado temporalmente para debug
```

#### **3. Proceso de WhatsApp:**
```
📱 WHATSAPP DEBUG: Iniciando proceso de envío...
📱 WHATSAPP DEBUG: Teléfono recibido: +54 9 11 1234-5678
📱 WHATSAPP DEBUG: Procesando número de teléfono...
📱 WHATSAPP DEBUG: Número formateado: 5491112345678
📱 WHATSAPP DEBUG: Generando mensaje...
📱 WHATSAPP DEBUG: Mensaje generado: ¡Hola Juan! 👋...
📱 WHATSAPP DEBUG: Enviando mensaje...
📱 WHATSAPP DEBUG: Access Token: ✅ Configurado
📱 WHATSAPP DEBUG: Phone Number ID: ✅ Configurado
```

#### **4. Éxito:**
```
✅ WHATSAPP SUCCESS: Mensaje enviado exitosamente
✅ WHATSAPP SUCCESS: Respuesta de la API: {...}
✅ WHATSAPP SUCCESS: Para: 5491112345678
```

#### **5. Error:**
```
❌ WHATSAPP ERROR: Error al enviar mensaje
❌ WHATSAPP ERROR: Mensaje de error: Invalid phone number
❌ WHATSAPP ERROR: Stack completo: Error: Invalid phone number...
❌ WHATSAPP ERROR: Respuesta completa: {...}
```

## 🔍 **Cómo debuggear:**

### **1. Verificar logs en Vercel:**
- Ve a tu dashboard de Vercel
- Click en tu proyecto
- Ve a "Functions" → "View Function Logs"
- Busca los logs con emojis 📱

### **2. Verificar variables de entorno:**
- Los logs mostrarán si están configuradas
- ✅ Configurado = Variable existe
- ❌ No configurado = Variable faltante

### **3. Probar con número real:**
- Usa tu propio número para probar
- Verifica que el formato sea correcto
- Revisa la respuesta de la API

## 🚨 **Errores comunes:**

### **1. "Invalid phone number":**
- Verifica el formato del número
- Asegúrate que tenga código de país
- Ejemplo correcto: +54 9 11 1234-5678

### **2. "Unauthorized":**
- Verifica el Access Token
- Asegúrate que sea válido y no expirado

### **3. "Phone number not found":**
- Verifica el Phone Number ID
- Asegúrate que coincida con tu número

## 🎯 **Para reactivar emails:**

Cuando termines de debuggear, descomenta las secciones marcadas con `/*` y `*/` en el archivo `app/api/quote/route.ts`.
