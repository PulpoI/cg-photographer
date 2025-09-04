# 🚀 Configuración Rápida con Gmail

## ⚠️ **Importante: Entregabilidad con Gmail**

**Gmail como remitente puede aumentar la probabilidad de que los emails vayan a spam** según las nuevas políticas de 2024. Sin embargo, para un formulario de contacto (volumen bajo, emails transaccionales), el riesgo es menor.

### 🎯 **Opciones recomendadas:**

#### **Opción 1: Gmail (Para empezar rápido)**
- ✅ Fácil configuración (5 minutos)
- ⚠️ Posible entrega a spam
- ✅ Perfecto para probar el sistema
- ✅ Volumen bajo = menos problemas

#### **Opción 2: Dominio personalizado (Recomendado a largo plazo)**
- ✅ Mejor entregabilidad 
- ✅ Más profesional
- ❌ Requiere configurar dominio
- ❌ Más complejo inicialmente

## ✅ **Pasos para empezar (Opción Gmail - 5 minutos)**

### 1. Crea tu archivo `.env.local`

En la raíz del proyecto, crea `.env.local` con:

```bash
# Tu configuración con Gmail
BREVO_API_KEY=tu_clave_api_aqui
BREVO_SENDER_EMAIL=tu_email@gmail.com
BREVO_ADMIN_EMAIL=tu_email@gmail.com
BREVO_SENDER_NAME=Tu Nombre

# Opcional
BREVO_CONTACT_LIST_ID=1
NEXT_PUBLIC_SITE_URL=https://tu-sitio.com
```

### 2. Obtén tu API Key de Brevo

1. Ve a [https://app.brevo.com](https://app.brevo.com)
2. Regístrate o inicia sesión
3. Ve a **Settings** (⚙️) → **API Keys**
4. Crea una nueva API Key
5. Cópiala y pégala en `BREVO_API_KEY`

### 3. Verifica tu Gmail en Brevo

1. En Brevo, ve a **Settings** → **Senders & IP**
2. Click **Add a Sender**
3. Pon tu email Gmail: `tu_email@gmail.com`
4. Pon tu nombre: `Tu Nombre`
5. Click **Save**
6. Revisa tu Gmail, habrá un email de verificación de Brevo
7. Click en el enlace de verificación

### 4. ¡Prueba tu formulario!

1. Inicia tu proyecto: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario con tus datos
4. Envía el mensaje
5. Revisa tu Gmail, deberías recibir:
   - Email de notificación con los datos del formulario
   - Email de confirmación (como si fueras el cliente)

## 🎯 **¿Todo funcionando?**

Si recibes ambos emails, ¡tu sistema está perfectamente configurado!

## 🔧 **Solución de Problemas**

### "API Key inválida"
- Revisa que copiaste bien la API Key
- Asegúrate de que no haya espacios extra

### "Sender not verified"
- Ve a tu Gmail y busca el email de verificación de Brevo
- Revisa spam si no lo encuentras
- Click en el enlace de verificación

### "Email not delivered"
- Revisa tu carpeta de spam en Gmail
- Espera unos minutos, a veces Brevo tarda un poco

### El formulario no se envía
- Abre las herramientas de desarrollador (F12)
- Ve a la pestaña "Console" para ver errores
- Revisa que todas las variables estén en `.env.local`

## 🚀 **¡Listo para usar!**

Con Gmail configurado tendrás:
- ✅ Formulario funcional al 100%
- ✅ Notificaciones inmediatas en tu Gmail
- ✅ Emails de bienvenida automáticos para clientes
- ✅ Todos los contactos guardados en Brevo
- ✅ Respuestas de clientes directo a tu Gmail
- ⚠️ Posible entrega a spam (pero funcional para probar)

## 🎯 **Siguiente paso recomendado:**

Una vez que pruebes que todo funciona con Gmail, considera migrar a un dominio personalizado para mejor entregabilidad:

1. **Configura un email con tu dominio** (ej: `contacto@tudominio.com`)
2. **Cambia las variables** en `.env.local`
3. **Verifica el dominio** en Brevo
4. **¡Mejor entregabilidad!** ✨

¡Tu formulario de contacto está listo para comenzar! 🎉
