# 🚀 Configuración de Brevo (SendinBlue) 

## ✅ Instalación Completada

Ya se han realizado los siguientes pasos:

1. ✅ Instalado `@getbrevo/brevo` SDK oficial
2. ✅ Creado API endpoint en `/app/api/contact/route.ts`
3. ✅ Actualizado componente de contacto con funcionalidad completa
4. ✅ Implementado validación de formulario
5. ✅ Configurado envío automático de emails

## 🔧 Configuración Requerida

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Brevo (SendinBlue) Configuration
BREVO_API_KEY=tu_clave_api_de_brevo_aqui

# Email que aparece como remitente (debe estar verificado en Brevo)
BREVO_SENDER_EMAIL=contacto@midominio.com
BREVO_SENDER_NAME=Tu Nombre o Empresa

# Email donde RECIBES las notificaciones (tu email personal/empresarial)
BREVO_ADMIN_EMAIL=tu_email_personal@gmail.com

# Optional: Lista de contactos específica (obtén el ID desde tu dashboard de Brevo)
BREVO_CONTACT_LIST_ID=1

# Optional: URL de tu sitio web (para enlaces en emails)
NEXT_PUBLIC_SITE_URL=https://tu-sitio.com
```

### 2. Obtener tu API Key de Brevo

1. Ve a [Brevo Dashboard](https://app.brevo.com/)
2. Navega a **Settings** → **API Keys**
3. Crea una nueva API Key o usa una existente
4. Copia la clave y pégala en `BREVO_API_KEY`

### 3. Configurar Gmail como Remitente

1. Ve a **Settings** → **Senders & IP** en Brevo
2. Agrega tu Gmail: `tu_email@gmail.com`
3. Brevo enviará un email de verificación a tu Gmail
4. Haz click en el enlace de verificación
5. ¡Listo! Ya puedes usar tu Gmail

### 4. (Opcional) Crear Lista de Contactos

1. Ve a **Contacts** → **Lists**
2. Crea una nueva lista o usa una existente
3. Copia el ID de la lista y úsalo en `BREVO_CONTACT_LIST_ID`

## 🎯 **Solución al Problema del Buzón de Email**

### ❓ **¿Tienes un remitente verificado pero no acceso al buzón?**

**Problema común**: Has configurado `contacto@midominio.com` en Brevo pero no tienes acceso a este buzón de correo.

### ✅ **Solución Implementada**

El sistema ahora separa dos conceptos importantes:

1. **`BREVO_SENDER_EMAIL`**: Email que aparece como remitente (ej: `contacto@midominio.com`)
   - Solo necesita estar verificado en Brevo
   - NO necesitas acceso al buzón
   - Hace que tus emails se vean profesionales

2. **`BREVO_ADMIN_EMAIL`**: Email donde TÚ recibes las notificaciones
   - Aquí es donde llegarán todos los mensajes del formulario
   - Usa tu email personal o empresarial al que sí tienes acceso
   - Puede ser Gmail, Outlook, etc.

### 🔧 **Configuración Recomendada (Gmail Directo)**

```bash
# Brevo Configuration
BREVO_API_KEY=tu_clave_api_de_brevo
BREVO_SENDER_EMAIL=tu_email@gmail.com
BREVO_ADMIN_EMAIL=tu_email@gmail.com
BREVO_SENDER_NAME=Tu Nombre

# Optional
BREVO_CONTACT_LIST_ID=1
NEXT_PUBLIC_SITE_URL=https://tu-sitio.com
```

✅ **Ventajas de usar Gmail:**
- **Simple**: Solo un email para todo
- **Confiable**: Gmail es súper confiable para entrega
- **Sin configuraciones complejas**: No necesitas verificar dominios
- **Todas las respuestas llegan**: Cero emails perdidos
- **Profesional**: Gmail se ve bien y es reconocido

### 📧 **Cómo Funciona con Gmail**

- **Email de envío**: `tu_email@gmail.com`
- **Notificaciones**: Van a `tu_email@gmail.com` ✅
- **Respuestas de clientes**: Van a `tu_email@gmail.com` ✅
- **Gestión**: Todo en un solo lugar, tu Gmail habitual

### 🎯 **Flujo Completo**

1. **Cliente** llena formulario → **Sistema** valida datos
2. **Tú recibes** notificación en Gmail con todos los detalles
3. **Cliente recibe** email de confirmación desde tu Gmail
4. **Cliente responde** → La respuesta llega directamente a tu Gmail
5. **Tú respondes** desde Gmail normalmente

### 🛠️ **Alternativas Adicionales**

1. **Crear el buzón real**: Configura `contacto@midominio.com` en tu proveedor de hosting
2. **Redirección de email**: Configura una redirección desde `contacto@` hacia tu email personal
3. **Email alias**: Muchos proveedores permiten crear alias que redirigen automáticamente

## ⚠️ **Problema Importante: Respuestas de Clientes**

### 🎯 **El Issue que Identificaste**

Si usas un email como `contacto@midominio.com` sin tener acceso al buzón:
- ❌ Cliente recibe email de `contacto@midominio.com`
- ❌ Cliente responde a `contacto@midominio.com`
- ❌ TÚ nunca ves esa respuesta (no tienes acceso al buzón)

### ✅ **Solución Implementada: Reply-To**

He configurado el sistema para usar **Reply-To**:
- ✅ Cliente ve email de `contacto@midominio.com` (profesional)
- ✅ Cuando responde, su email va automáticamente a tu Gmail
- ✅ Tú recibes TODAS las respuestas en tu buzón accesible

### 🎯 **Mi Recomendación Personal**

Para un fotógrafo que está empezando:

#### **Opción 1: Solo Gmail (Recomendada para empezar)**
```bash
BREVO_SENDER_EMAIL=tu_email@gmail.com
BREVO_ADMIN_EMAIL=tu_email@gmail.com
```
**Ventajas**: 
- ✅ Cero problemas de configuración
- ✅ Todas las respuestas llegan a tu Gmail
- ✅ Puedes empezar inmediatamente
- ✅ Gmail se ve suficientemente profesional

#### **Opción 2: Dominio Personalizado (Para cuando crezcas)**
```bash
BREVO_SENDER_EMAIL=contacto@midominio.com
BREVO_ADMIN_EMAIL=tu_email@gmail.com
```
**Ventajas**:
- ✅ Máxima profesionalidad
- ✅ Respuestas van automáticamente a tu Gmail (Reply-To)
- ✅ Brand consistency

### 💡 **Consejo Práctico**

**Empieza con Gmail** → Cuando tengas más clientes y quieras más profesionalidad → Cambia al dominio personalizado.

El cambio es súper fácil, solo cambias las variables de entorno.

## 🚀 Funcionalidades Implementadas

### ✉️ Para el Administrador
- **Notificación inmediata**: Recibes un email cada vez que alguien envía el formulario
- **Información completa**: Email incluye todos los datos del contacto
- **Respuesta directa**: Puedes responder directamente al email del cliente
- **Formato profesional**: Email con diseño atractivo y toda la información organizada

### 👤 Para el Cliente
- **Email de bienvenida automático**: Confirmación de que su mensaje fue recibido
- **Información de seguimiento**: Se les informa que recibirán respuesta en 24 horas
- **Diseño profesional**: Email con tu branding y enlaces a tu sitio web

### 📊 Gestión de Contactos
- **Almacenamiento automático**: Todos los contactos se guardan en Brevo
- **Actualización inteligente**: Si un contacto ya existe, se actualiza su información
- **Organización por listas**: Los contactos se pueden agregar a listas específicas

## 🛠️ Personalización Adicional

### Cambiar Plantillas de Email

Edita el archivo `/app/api/contact/route.ts` y modifica las secciones `htmlContent` para:

- Cambiar colores y estilos
- Agregar tu logo
- Modificar el contenido de los mensajes
- Agregar enlaces adicionales

### Agregar Campos al Formulario

1. Actualiza la interfaz `FormData` en `/components/home/contact.tsx`
2. Agrega los nuevos campos al formulario
3. Actualiza la validación en `validateForm()`
4. Modifica el endpoint para procesar los nuevos campos

### Configurar Webhooks (Avanzado)

Para recibir notificaciones en tiempo real, puedes configurar webhooks en Brevo:

1. Ve a **Settings** → **Webhooks**
2. Crea un webhook apuntando a tu sitio
3. Configura los eventos que quieres recibir

## 🔧 Solución de Problemas

### Error: "API Key inválida"
- Verifica que `BREVO_API_KEY` esté correctamente configurada
- Asegúrate de que la API Key tenga los permisos necesarios

### Error: "Email remitente no verificado"
- Verifica tu dominio en Brevo
- Usa un email del dominio verificado en `BREVO_SENDER_EMAIL`

### Los emails no llegan
- Revisa la carpeta de spam
- Verifica que el dominio esté correctamente configurado
- Consulta los logs de Brevo en su dashboard

### Problemas con CORS
- Los endpoints de API de Next.js manejan CORS automáticamente
- Si tienes problemas, verifica que estés usando el endpoint correcto

## 📝 Ejemplo de Uso

Una vez configurado, el flujo será:

1. **Cliente** llena el formulario en tu sitio web
2. **Sistema** valida los datos automáticamente
3. **Brevo** recibe y guarda el contacto
4. **Tú** recibes un email con todos los detalles
5. **Cliente** recibe confirmación automática
6. **Tú** puedes responder directamente desde tu email

## 🎯 Próximos Pasos Recomendados

1. **Configurar las variables de entorno** según las instrucciones
2. **Probar el formulario** enviando un mensaje de prueba
3. **Personalizar los templates** de email con tu branding
4. **Configurar listas de contactos** para mejor organización
5. **Agregar automatizaciones** en Brevo para seguimiento

¡Tu formulario de contacto con Brevo está listo para usar! 🎉
