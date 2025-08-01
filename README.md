# MindFit - Fitness App 🏋️‍♂️

Una aplicación web moderna de fitness construida con React, Vite y Tailwind CSS.

## 🚀 Características

- **Dashboard**: Vista general de tu progreso fitness con estadísticas clave
- **Workouts**: Biblioteca de rutinas de ejercicios organizadas por dificultad
- **Progress**: Seguimiento de tu progreso y logros
- **Profile**: Gestión de perfil personal y objetivos fitness
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Tema Oscuro/Claro**: Soporte para temas con next-themes

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework de CSS utilitario
- **Radix UI** - Componentes de interfaz accesibles
- **Lucide React** - Iconos modernos
- **Framer Motion** - Animaciones fluidas
- **Recharts** - Gráficos y visualizaciones

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Sergiom84/FitTEst.git
   cd FitTEst
   ```

2. **Instala las dependencias**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter ESLint

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes de interfaz reutilizables
│   └── Navigation.jsx # Componente de navegación principal
├── pages/
│   ├── Dashboard.jsx  # Página principal con estadísticas
│   ├── Workouts.jsx   # Biblioteca de ejercicios
│   ├── Progress.jsx   # Seguimiento de progreso
│   └── Profile.jsx    # Perfil de usuario
├── lib/
│   └── utils.js       # Utilidades y helpers
├── App.jsx            # Componente principal de la aplicación
├── main.jsx           # Punto de entrada de React
├── index.css          # Estilos globales y variables CSS
└── App.css            # Estilos específicos de la aplicación
```

## 🎨 Características de Diseño

- **Sistema de Colores**: Paleta de colores consistente con soporte para tema oscuro
- **Componentes Modulares**: Arquitectura de componentes reutilizables
- **Animaciones**: Transiciones suaves con Framer Motion
- **Iconografía**: Iconos consistentes con Lucide React
- **Tipografía**: Jerarquía tipográfica clara y legible

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Sergio** - [Sergiom84](https://github.com/Sergiom84)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
