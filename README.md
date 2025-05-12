# Master of APIs

Aplicación web desarrollada como parte de una prueba técnica frontend. Su objetivo es mostrar y filtrar un conjunto de APIs REST públicas abiertas, permitiendo al usuario consultar una lista organizada y explorar sus detalles de forma sencilla. Desarrollada con Angular y Angular Material.

## 1. Demo en Producción

- 🌐 [Ver aplicación en Vercel](https://linktic-prueba-frontend.vercel.app/)
- 📁 [Repositorio en GitHub](https://github.com/FranciscoFrontEndDeveloper/LinkticPruebaFrontend)

## 2. Tecnologías Usadas

- Angular 19
- Angular Material
- TypeScript
- SCSS
- Git / GitHub
- Vercel

## 3. Estructura del Proyecto

'masterApis/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── apidatatable/     # Muestra datos de las APIs en tabla
│   │   │   ├── apifilter/        # Filtro de búsqueda por tema
│   │   │   ├── apimenu/          # Menú principal de navegación
│   │   │   ├── genericview/      # Vista genérica para errores o estados vacíos
│   │   │   ├── maincomponent/    # Componente principal del flujo
│   │   ├── services/
│   │   │   ├── jsonplaceholder/  # Servicio para consumo de API
│   ├── assets/
│   └── index.html'


## 4. Instalación Local

```bash
git clone https://github.com/FranciscoFrontEndDeveloper/LinkticPruebaFrontend.git
cd masterApis
npm install
ng serve
5. Funcionalidades

    Listado de APIs públicas con información organizada.

    Filtro por palabra clave o tema.

    Vista de detalles de una API individual.

    Manejo de errores simples (fallo en fetch, datos vacíos).

    Interfaz responsiva y agradable visualmente con Angular Material.

6. Pruebas Unitarias

Se implementaron pruebas unitarias con cobertura destacada sobre componentes clave y servicios:

Statements   : 88.09% ( 37/42 )
Branches     : 75%    ( 3/4 )
Functions    : 83.33% ( 10/12 )
Lines        : 86.48% ( 32/37 )

7. Decisiones Técnicas

    El primer día se hizo un proceso de planificación, conceptualización e implementación, evaluando el alcance viable dentro del plazo de entrega.

    Se optó por Angular Material para acelerar el desarrollo visual por su integración fluida con Angular.

    Se creó un servicio genérico para facilitar la reutilización en futuros componentes.

    Se elaboró un mockup inicial simple como guía para definir la cantidad de componentes y el flujo básico de navegación.

8. Mockup Inicial

Se adjunta como referencia el diseño preliminar creado durante el primer día de trabajo.
[mockup Linktic Frontend Test-Page 1.pdf](https://github.com/user-attachments/files/20154106/mockup.Linktic.Frontend.Test-Page.1.pdf)

9. Mejoras Futuras

    Agregar más APIs públicas a la base.

    Mejorar el filtrado con categorías múltiples o etiquetas.

    Implementar paginación y carga perezosa.

    Añadir pruebas end-to-end (E2E).
