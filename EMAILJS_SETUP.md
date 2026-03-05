# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)

### 2. Configurar el servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Copia el **Service ID** que se genera

### 3. Crear plantilla de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura tu plantilla con las siguientes variables:
   ```
   De: {{from_name}} ({{from_email}})
   
   Mensaje:
   {{message}}
   ```
4. En "To Email" coloca tu email: `geraldcalderoncastillo@gmail.com`
5. Copia el **Template ID**

### 4. Obtener Public Key

1. Ve a **Account** → **General**
2. Encuentra tu **Public Key**
3. Cópiala

### 5. Configurar variables de entorno

#### Para desarrollo local:
1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega tus credenciales:
```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

#### Para producción en Netlify:
1. Ve a tu sitio en Netlify
2. Navega a **Site settings** → **Environment variables**
3. Agrega las siguientes variables:
   - `VITE_EMAILJS_SERVICE_ID` con tu Service ID
   - `VITE_EMAILJS_TEMPLATE_ID` con tu Template ID
   - `VITE_EMAILJS_PUBLIC_KEY` con tu Public Key
4. Redeploya tu sitio

### 6. Probar el formulario

1. Ejecuta tu proyecto localmente: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envía un mensaje de prueba
4. Verifica que el email llegue a tu bandeja de entrada

## Plantilla sugerida para EmailJS

**Subject:** Nuevo mensaje de contacto de {{from_name}}

**Content:**
```html
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
    <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
    
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    
    <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 3px solid #007bff;">
      <p><strong>Mensaje:</strong></p>
      <p>{{message}}</p>
    </div>
    
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
    
    <p style="color: #666; font-size: 12px;">
      Este mensaje fue enviado desde tu portafolio web.
    </p>
  </div>
</div>
```

## Notas importantes

- ✅ El plan gratuito de EmailJS permite 200 emails/mes
- ✅ Las variables de entorno en Vite deben empezar con `VITE_`
- ✅ Netlify inyectará automáticamente las variables de entorno al hacer build
- ✅ No subas el archivo `.env.local` a GitHub (ya está en .gitignore)

## Troubleshooting

**Error: "La solicitud falló"**
- Verifica que las credenciales sean correctas
- Asegúrate de que el servicio de email esté conectado en EmailJS
- Revisa la consola del navegador para más detalles

**Los emails no llegan:**
- Verifica la carpeta de spam
- Confirma que el email de destino esté correcto en la plantilla
- Revisa los logs en el dashboard de EmailJS

**Variables de entorno no funcionan:**
- Reinicia el servidor de desarrollo después de crear `.env.local`
- En Netlify, verifica que las variables estén correctamente configuradas
- Asegúrate de que las variables empiecen con `VITE_`
