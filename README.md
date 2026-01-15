# API de Productos Fastify

Una API REST de alto rendimiento construida con [Fastify] y [TypeScript]. Este proyecto sirve una lista de productos desde un conjunto de datos JSON local e incluye un conjunto completo de pruebas.

## Características

- **TypeScript**: Código totalmente tipado para mayor fiabilidad y experiencia de desarrollo.
- **Fastify**: Framework web de bajo coste (overhead) y alto rendimiento.
- **Pruebas**: Suite de pruebas integrada usando `tap` para la verificación fiable de endpoints.
- **Estándares Modernos**: Utiliza módulos ES (ES Modules) y características modernas de JavaScript.

## Requisitos Previos

- **Node.js**: v18.0.0 o superior recomendado.
- **npm**: v9.0.0 o superior.

## Instalación

1. Clona el repositorio (si corresponde) o descarga el código fuente.
2. Navega al directorio del proyecto:
   ```bash
   cd fastify-products-api
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para ejecutar el servidor en modo desarrollo con recarga en vivo (vía `ts-node`):

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`.

## Compilando para Producción

Para compilar el código TypeScript a JavaScript:

```bash
npm run build
```

Esto generará los archivos de distribución en el directorio `dist`.

## Ejecutando en Producción

Después de compilar el proyecto, inicia el servidor de producción:

```bash
npm start
```

## Pruebas

Ejecuta la suite de pruebas para verificar los endpoints de la API:

```bash
npm test
```

## Endpoints de la API

### `GET /products`

Devuelve la lista de todos los productos disponibles.

**Respuesta:**
- **Estado**: `200 OK`
- **Content-Type**: `application/json`
- **Cuerpo**: Array de objetos de productos.

**Ejemplo de Respuesta:**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    ...
  },
  ...
]
```

## Estructura del Proyecto

- `src/`: Archivos de código fuente (`app.ts`, `server.ts`).
- `test/`: Archivos de prueba.
- `data/`: Almacenamiento de datos JSON.
- `dist/`: Salida JavaScript compilada (generada después del build).
