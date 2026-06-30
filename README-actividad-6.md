# Actividad #6 - Implementación de Diseño Adaptable y Layout

Esta entrega corresponde a la rama `feature/responsive-layout`.

## Estructura subida

```text
index.html
reportar.html
tickets.html
assets/
  img/
    logo-helpdesk.png
    logo-helpdesk.svg
  css/
    responsive-layout.css
Kit_UI/
  index.html
  README.md
  style.css
  ui-kit/
    index.html
    README.md
    style.css
```

## Explicación

La carpeta `Kit_UI/` contiene la librería de componentes UI desarrollada en la Actividad #5. Esta carpeta se mantiene separada para no crear conflictos con los archivos principales `index.html`, `reportar.html` y `tickets.html` de la Actividad #6.

Las páginas principales usan primero la librería de la Actividad #5:

```html
<link rel="stylesheet" href="Kit_UI/style.css">
```

Luego se carga el archivo nuevo de la Actividad #6:

```html
<link rel="stylesheet" href="assets/css/responsive-layout.css">
```

De esta forma no se repite el código del UI Kit. El archivo `responsive-layout.css` solo agrega el layout adaptable con Flexbox, CSS Grid y media queries.

## Requisitos aplicados

- Se vinculó la hoja de estilos del UI Kit.
- Se aplicaron clases del UI Kit en botones, formularios, tarjetas y badges.
- Se usó CSS Grid para organizar el Dashboard, el formulario y la tabla de tickets.
- Se usó Flexbox para el cuerpo de la página, navegación y footer.
- Se corrigió el pie de página para que permanezca al final de la pantalla cuando hay poco contenido.
- Se mantuvo la etiqueta `meta viewport` en las tres páginas.
- Se agregaron media queries para pantallas menores a 768px.
- La tabla de tickets se colocó en un contenedor responsive para evitar desbordamiento horizontal.
- Se conservó el contenido original de las páginas, modificando principalmente clases y organización visual.

## Rama de trabajo

La actividad debe subirse en una rama nueva llamada:

```text
feature/responsive-layout
```

Luego se puede crear el Pull Request hacia `develop`:

```text
feature/responsive-layout → develop
```
