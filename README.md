# Sendero Pedagógico

## Descripción general
Sendero Pedagógico es una plataforma web informativa creada para la Escuela Ruca Raqui con el objetivo de difundir y preservar el conocimiento territorial y cultural de la comunidad. El proyecto es desarrollado por estudiantes de la Universidad de La Frontera como parte de una iniciativa académica orientada a fortalecer la vinculación con el medio y entregar una solución tecnológica sostenible para la escuela.

## Objetivos del proyecto
- Ofrecer un repositorio digital de historias, recursos pedagógicos y material multimedia relacionados con el Sendero Pedagógico.
- Facilitar el acceso a contenidos en mapudungun y castellano mediante colecciones organizadas y fáciles de mantener.
- Potenciar la visibilidad de la Escuela Ruca Raqui y su trabajo territorial a través de una experiencia web moderna y responsiva.

## Estado actual
La aplicación se encuentra en desarrollo activo. El listado de historias y sus páginas de detalle están operativas, al igual que el glosario temático. Las secciones de recorridos y normas para la visita se encuentran en construcción y se acompañan de contenido de referencia para continuar la redacción.

## Tecnologías y arquitectura
- **Framework:** [Astro](https://astro.build/) 5.x para generar un sitio estático rápido y fácil de desplegar.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) 4.x habilitado vía `@tailwindcss/vite` para componer interfaces reutilizables.
- **Gestión de contenido:** Colecciones definidas con `astro:content`, lo que permite validar esquemas y mantener el contenido en archivos Markdown.
- **Lenguaje:** JavaScript con módulos ECMAScript y configuración orientada a un flujo de trabajo moderno basado en Vite.

## Estructura relevante
```
src/
	components/StoryCard.astro    # Tarjeta reutilizable para listar historias
	content/
		config.js                   # Esquemas de colecciones (historias y glosario)
		historias/*.md              # Contenido narrativo del sendero
		glosario/*.md               # Definiciones y términos relevantes
	layouts/BaseLayout.astro      # Plantilla base con estilos globales
	pages/                        # Rutas principales (inicio, historias, glosario, visitar)
	styles/global.css             # Entrada única para Tailwind CSS
public/imagenes/                # Recursos gráficos utilizados en las páginas
```

## Puesta en marcha
Requisitos previos:
- Node.js 20 LTS o superior.

Instalación e inicio del entorno de desarrollo:
```powershell
npm install
npm run dev
```

Comandos adicionales:
```powershell
npm run build   # Genera la versión estática lista para despliegue
npm run preview # Levanta un servidor local con la build generada
```

## Gestión de contenidos
- **Historias:** Cada entrada se almacena en `src/content/historias`, sigue el esquema definido en `config.js` y se publica automáticamente si `publicado` no es `false`. Las portadas se cargan desde `public/imagenes/historias/` para mantener rutas estables.
- **Glosario:** Los términos y significados se administran desde `src/content/glosario`. El listado se ordena alfabéticamente y soporta contenido adicional en Markdown.
- **Imágenes:** Todos los recursos deben ubicarse bajo `public/imagenes` para garantizar rutas públicas correctas y un control claro de activos.

## Buenas prácticas y flujo de trabajo
- Mantener consistencia en los metadatos (`title`, `resumen`, `fecha`, `tags`) para asegurar un renderizado homogéneo en las tarjetas y páginas de detalle.
- Validar las entradas ejecutando `npm run dev` y revisando la consola de Astro, que informa problemas de esquema o rutas faltantes.
- Utilizar ramas de características (`feature/*`) y revisiones de código antes de fusionar en `main`, alineado con la rama actual `feature/pipelineCI`.

## Próximos pasos sugeridos
- Completar la página de inicio (`src/pages/index.astro`) con narrativa institucional y accesos directos a historias destacadas.
- Incorporar contenido definitivo en la sección "Visitar" para describir recorridos, normas y datos de contacto.
- Evaluar la generación de un pipeline de despliegue continuo que utilice la salida estática de Astro en plataformas como GitHub Pages, Vercel o Netlify.
