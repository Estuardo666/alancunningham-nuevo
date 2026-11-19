# Cambios de contenido del 22 de octubre

Fuente: `C:/Users/Stuart/Documents/Alan/Cambios 22 octubre`.
Proyecto confirmado por Stuart: `alancunningham-nuevo`.

Los tres audios y el audio del video se transcribieron localmente con faster-whisper 1.2.1, modelo large-v3-turbo, idioma español, CPU/int8. Las transcripciones conservan la salida automática: «implantes criados» corresponde por contexto a «implantes guiados»; «COS» no se corrigió por no ser inequívoco. El enlace escrito de Exodental es la referencia para los turnos.

El video recorre inicio, nosotros, tratamientos, casos, turismo y contacto. Se revisaron fotogramas a intervalos de tres segundos. La locución indica que el desarrollo de los tres casos se enviaría por separado; CAMBIOS.txt ya contiene las seis etapas comunes y la descripción de rehabilitación bimaxilar.

## Aplicado

- Textos de portada, sobre el consultorio y equipo multidisciplinario.
- Tres casos con descripción de carillas feldespáticas y disilicato y las seis etapas proporcionadas. Se conservaron sus URLs y fotos existentes.
- Foto y ficha de Marcela; carrusel existente con Alan y Marcela. Biografías de los cuatro integrantes restantes guardadas en EQUIPO_PENDIENTE_FOTO. Stuart confirmó que enviará sus fotos después; no se asignaron las imágenes sin identificar.
- Enlace de reserva de Exodental en portada, navegación y CTA compartido.
- Foto de microcirugía apical en la página de tratamiento de conducto. El original se incorporó sin recortarlo; el recorte pedido en el nombre del archivo sigue pendiente.
- Video de portada actualizado por la selección de Stuart: Cedric Fauntleroy, Pexels 4490547, https://www.pexels.com/video/woman-looking-her-teeth-on-the-mirror-4490547/ . Paciente de cabello castaño mirando su sonrisa en un espejo. Video reflejado horizontalmente para colocar a la paciente a la derecha y dejar espacio para el texto existente. Archivo H.264 sin audio, con poster local actualizado. Se conserva el tratamiento visual existente. No se atribuye nacionalidad a la modelo.

## Reseñas automáticas

El sitio es una exportación estática. La API de Google Places ya obtiene reseñas reales durante cada build y la clave local está configurada. El workflow `refresh-reviews.yml` solicita un rebuild diario a las 10:00 UTC. Para activarlo en producción hay que configurar el secreto GitHub `RENDER_DEPLOY_HOOK_URL` con el deploy hook del servicio Render y disponer de `GOOGLE_MAPS_PLACES_API_KEY` en Render. La preparación local no configura esos secretos ni despliega.

## Pendiente

- Fotos identificadas de Andrés Loyola, Estefano Alban, Meryl Williams y Avril Peñalva, prometidas por Stuart.
- Activar el secreto del deploy hook y publicar los cambios para habilitar la actualización diaria de reseñas.
- Recorte de la foto de microcirugía apical.

## Segundo contraste con el pedido de Alan

Se contrastaron nuevamente CAMBIOS.txt, las transcripciones y las imágenes de los tres casos. Se corrigió el texto de Turismo que todavía hablaba de un solo responsable; también se retiraron las leyendas adicionales de las tarjetas de casos y se unificó la leyenda del comparador de cada ficha con la descripción solicitada. El título de las tarjetas ya no se trunca a dos líneas.

Las seis etapas de los tres casos coinciden con las escritas por Alan. La segunda fotografía existente muestra a un hombre de cabello canoso, sin barba marcada; no se puede confirmar que sea el «paciente 2 viejo barbud» mencionado en el documento. Se conserva la foto existente, sin sustituirla ni atribuir otra identidad.

El carrusel permite pasar manualmente entre los profesionales; no tiene avance automático. Las descripciones completas de Alan y Marcela están en sus fichas. En la tarjeta de Alan se muestra su formación; la de Marcela muestra un resumen limitado a dos líneas. Esto conserva el comportamiento y el diseño existentes, pero no equivale a mostrar la biografía completa dentro de cada tarjeta.

## Verificación

`npm run check` completado: lint sin advertencias, TypeScript y build de 49 páginas correctos. La auditoría señala contenido previo todavía pendiente de validación fuera de estos cambios.

Prueba de navegador: inicio, nosotros, ficha de Marcela, tratamiento de conducto y un caso devolvieron HTTP 200, sin errores de JavaScript ni desbordamiento horizontal en las vistas verificadas. Portada verificada a 1440 px y 390 px; video cargado correctamente, ocho enlaces de reserva en el inicio. Carrusel móvil: navegar a Marcela y abrir su tarjeta funciona. Google Reviews devolvió HTTP 200 con 197 reseñas en el momento de la prueba.
