# Actividad #5 - Librería de Componentes UI / Design System

Este entregable corresponde al UI Kit del sistema **HelpDesk Soporte Data Center**. Incluye componentes reutilizables construidos con HTML5 y CSS3 puro, sin frameworks externos.

## Archivos principales

- `index.html`: página de demostración del Design System.
- `style.css`: hoja de estilos con variables CSS, componentes y media queries.
- `screenshots/`: evidencias de visualización generadas para el informe.

## Componentes incluidos

1. Variables CSS en `:root` para colores, tipografía, radios, sombras y espaciados.
2. Botones reutilizables con clase base `.btn` y variantes `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.btn--outline`.
3. Formularios con `.form-control`, `.form-select`, `.form-textarea`, `.form-group` y estados de enfoque.
4. Tarjetas con `.card` y `.ticket-card` para presentar información de tickets.
5. Badges y alertas con `.badge`, `.badge--high`, `.badge--medium`, `.badge--low`, `.alert--success`, `.alert--warning` y `.alert--danger`.

## Uso básico

```html
<link rel="stylesheet" href="style.css">
<button class="btn btn--primary">Guardar ticket</button>
<span class="badge badge--high">Alta</span>
```


## Criterios aplicados

- Código limpio y comentado.
- Reutilización mediante clases base y variantes.
- Diseño responsive con `@media (max-width: 768px)`.
- Accesibilidad básica mediante etiquetas `label`, navegación semántica, estados `:focus-visible` y atributos `aria`.
