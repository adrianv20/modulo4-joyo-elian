# 🎬 Buscador de Películas

Una aplicación web desarrollada en React que permite buscar películas utilizando la API de OMDb y gestionar una lista personal de favoritos.

## ✨ Características

- **Búsqueda de películas**: Busca películas por título usando un campo de búsqueda
- **Resultados visuales**: Muestra resultados en tarjetas con imagen, título, año y tipo
- **Gestión de favoritos**: Agrega y quita películas de tu lista personal de favoritos
- **Persistencia local**: Los favoritos se guardan en el localStorage del navegador
- **Diseño responsivo**: Funciona en dispositivos móviles y de escritorio
- **Estados de carga**: Indica cuando se están cargando los datos
- **Manejo de errores**: Muestra mensajes informativos cuando algo sale mal

## 🏗️ Arquitectura de Componentes

```
App
├── SearchBar (búsqueda de películas)
├── MovieList (lista de resultados)
│   └── MovieCard (tarjeta individual de película)
└── Favorites (lista de películas favoritas)
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **OMDb API** - API externa para datos de películas
- **Vitest** - Framework de testing
- **Testing Library** - Utilidades para pruebas de componentes React
- **CSS Modules** - Estilos modulares y responsivos

## 🚀 Instalación y Configuración

1. **Clona el repositorio**

   ```bash
   git clone <tu-repositorio>
   cd react-proyect
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura la API Key**

   - Regístrate en [OMDb API](http://www.omdbapi.com/apikey.aspx) para obtener una API key gratuita
   - Abre `src/services/movieService.js`
   - Reemplaza la API_KEY demo con tu propia key:

   ```javascript
   const API_KEY = "tu-api-key-aqui";
   ```

4. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   - Ve a `http://localhost:5173`

## 🧪 Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con interfaz visual
npm run test:ui

# Ejecutar pruebas una vez (modo CI)
npm run test:run
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── SearchBar.jsx       # Barra de búsqueda
│   ├── SearchBar.css
│   ├── MovieList.jsx       # Lista de películas
│   ├── MovieList.css
│   ├── MovieCard.jsx       # Tarjeta individual de película
│   ├── MovieCard.css
│   ├── Favorites.jsx       # Componente de favoritos
│   └── Favorites.css
├── services/
│   └── movieService.js     # Servicio para API de películas
├── hooks/
│   └── useFavorites.js     # Hook personalizado para favoritos
├── App.jsx                 # Componente principal
├── App.css
├── main.jsx               # Punto de entrada
└── index.css

__tests__/
├── SearchBar.test.js      # Pruebas para SearchBar
├── MovieCard.test.js      # Pruebas para MovieCard
└── Favorites.test.js      # Pruebas para Favorites
```

## 🎯 Funcionalidades Principales

### Búsqueda de Películas

- Campo de texto para ingresar el término de búsqueda
- Botón de búsqueda que se deshabilita durante la carga
- Validación para evitar búsquedas vacías
- Soporte para búsqueda con Enter

### Gestión de Favoritos

- Botón para agregar/quitar películas de favoritos
- Indicador visual del estado de favorito
- Persistencia en localStorage
- Lista dedicada de películas favoritas

### Experiencia de Usuario

- Estados de carga mientras se buscan películas
- Mensajes de error informativos
- Placeholders para imágenes faltantes
- Diseño responsivo para móviles

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter de código
- `npm test` - Ejecuta las pruebas en modo watch
- `npm run test:ui` - Ejecuta las pruebas con interfaz visual
- `npm run test:run` - Ejecuta las pruebas una vez

## 🧪 Cobertura de Pruebas

Las pruebas cubren:

- **SearchBar**: Actualización de estado, envío de formularios, validaciones
- **MovieCard**: Renderizado de información, manejo de favoritos, estados visuales
- **Favorites**: Lista vacía, renderizado de favoritos, conteo de elementos

## 🎨 Características de Diseño

- **Tarjetas de películas**: Efecto hover y sombras
- **Colores consistentes**: Paleta de colores profesional
- **Tipografía legible**: Fuentes del sistema para mejor rendimiento
- **Espaciado uniforme**: Grid responsive para diferentes tamaños de pantalla
- **Estados interactivos**: Retroalimentación visual en botones y campos

## 🌐 API Externa

Utiliza la [OMDb API](http://www.omdbapi.com/) que proporciona:

- Información detallada de películas
- Imágenes de posters
- Datos de año, tipo y calificaciones
- Búsqueda por título
- API gratuita con límites razonables

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
