# 📊 Guía de SEO - Portafolio Gerald Calderón

## ✅ Configuración Implementada

### 1. Meta Tags Básicos
- ✓ Title optimizado: "Gerald Calderón | Desarrollador Web Full Stack - Laravel & React"
- ✓ Meta description: Descripción profesional de 160 caracteres
- ✓ Meta keywords: Palabras clave relevantes
- ✓ Canonical URL
- ✓ Robots meta tag

### 2. Open Graph (Facebook, LinkedIn, WhatsApp)
- ✓ og:title
- ✓ og:description
- ✓ og:image
- ✓ og:url
- ✓ og:type
- ✓ og:locale

### 3. Twitter Cards
- ✓ twitter:card
- ✓ twitter:title
- ✓ twitter:description
- ✓ twitter:image

### 4. Archivos SEO
- ✓ robots.txt
- ✓ sitemap.xml
- ✓ manifest.json (PWA)

### 5. Datos Estructurados (JSON-LD)
- ✓ Schema.org Person
- ✓ Información profesional
- ✓ Habilidades técnicas

## 🎨 Crear Imagen Open Graph

**IMPORTANTE:** Necesitas crear una imagen `og-image.jpg` en la carpeta `public/` con estas características:

### Especificaciones:
- **Tamaño:** 1200 x 630 px (proporción 1.91:1)
- **Formato:** JPG o PNG
- **Peso:** Máximo 1 MB

### Contenido sugerido:
- Tu nombre: "Gerald Calderón"
- Título: "Desarrollador Web Full Stack"
- Logo o foto profesional
- Tecnologías principales: Laravel, React, PHP, JavaScript
- Fondo: Diseño minimalista con tu paleta de colores (#000000, #667eea)

### Herramientas recomendadas:
- Canva (plantilla "Open Graph")
- Figma
- Photoshop

## 🚀 Próximos Pasos

### 1. Crear imagen OG
Crea el archivo `public/og-image.jpg` con las especificaciones arriba mencionadas.

### 2. Verificar en Google Search Console
1. Ve a https://search.google.com/search-console
2. Agrega tu dominio: geraldcalderon.site
3. Verifica la propiedad
4. Envía tu sitemap: https://geraldcalderon.site/sitemap.xml

### 3. Actualizar enlaces sociales
En `index.html`, actualiza las URLs de tus redes sociales en el JSON-LD:
- GitHub: Tu perfil real
- LinkedIn: Tu perfil real

### 4. Probar el SEO
Herramientas para verificar:
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

### 5. Sitemap
El sitemap ya está creado en `public/sitemap.xml`. Actualiza la fecha `<lastmod>` cuando hagas cambios importantes.

## 📈 Cómo Aparecerá en Google

```
Gerald Calderón | Desarrollador Web Full Stack - Laravel & React
geraldcalderon.site
https://geraldcalderon.site
Soy Ingeniero en Sistemas de Información y desarrollador web, enfocado en 
crear soluciones digitales sólidas, escalables y orientadas a resultados. 
Especializado en Laravel, React y desarrollo Full Stack.
```

## 🔍 Keywords Optimizadas

- Gerald Calderón
- Desarrollador Web
- Full Stack Developer
- Laravel
- React
- PHP
- JavaScript
- Desarrollo Web
- Portafolio
- Ingeniero en Sistemas

## 💡 Consejos Adicionales

1. **Actualiza regularmente:** Mantén tu portafolio actualizado con nuevos proyectos
2. **Blog:** Considera agregar una sección de blog para mejorar el SEO
3. **Performance:** Asegúrate de que tu sitio cargue rápido (usa Lighthouse)
4. **Mobile-First:** Tu sitio debe verse perfecto en móviles
5. **HTTPS:** Asegúrate de usar HTTPS en producción
6. **Analytics:** Instala Google Analytics para monitorear el tráfico

## 📝 Checklist antes de deployment

- [ ] Crear `og-image.jpg` en la carpeta `public/`
- [ ] Actualizar URLs de redes sociales en JSON-LD
- [ ] Verificar que todos los links internos funcionen
- [ ] Probar el sitio en diferentes dispositivos
- [ ] Ejecutar Lighthouse audit (mínimo 90+ en SEO)
- [ ] Enviar sitemap a Google Search Console
- [ ] Verificar meta tags con herramientas online
