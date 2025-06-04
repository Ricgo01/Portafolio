# 🌟 Portafolio Personal

Un portafolio moderno y responsive construido con **Astro**, **React**, y **Tailwind CSS**, diseñado para mostrar proyectos y habilidades técnicas con un sistema de temas personalizado y una paleta de colores única.

## ✨ Características

- 🎨 **Paleta de colores personalizada** (Beige, Azul, Navy, Marrón)
- 🌙 **Modo oscuro/claro** con toggle animado
- 📱 **Diseño completamente responsive**
- ⚡ **Performance optimizada** con Astro
- 🔗 **Navegación suave** entre secciones
- 📧 **Formulario de contacto** funcional con EmailJS
- 🎭 **Animaciones** y transiciones fluidas
- 🚀 **Deploy automático** a GitHub Pages

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Beige** | `#EFE4D2` | Fondos principales, elementos secundarios |
| **Azul** | `#254D70` | Acentos, links, botones |
| **Navy** | `#131D4F` | Textos principales, elementos oscuros |
| **Marrón** | `#954C2E` | Destacados, call-to-action |

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) v5.8.0
- **UI Components:** [React](https://reactjs.org/) v19.1.0
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3.4.17
- **Animaciones:** Typewriter Effect
- **Email Service:** EmailJS
- **Deploy:** GitHub Pages con GitHub Actions

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de GitHub Actions
├── public/
│   ├── images/                 # Imágenes estáticas
│   ├── icons/                  # Iconos SVG
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/           # Secciones del portafolio
│   │   │   ├── Principal.astro
│   │   │   ├── SobreMi.astro
│   │   │   ├── Tecnologias.astro
│   │   │   ├── Proyectos.astro
│   │   │   ├── Contact.astro
│   │   │   └── react/
│   │   │       └── ProjectSection.tsx
│   │   └── ui/                 # Componentes reutilizables
│   │       ├── ThemeToggle.astro
│   │       ├── TechCard.astro
│   │       ├── ProjectCardItem.tsx
│   │       └── Formu.astro
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/
│       └── global.css          # Estilos globales
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.js          # Configuración de Tailwind
└── package.json
```

## 🚀 Instalación y Desarrollo

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## 🚀 Deploy

### GitHub Pages (Automático)

El proyecto está configurado para deploy automático en GitHub Pages usando GitHub Actions:

1. **Push a main** → Trigger automático del workflow
2. **Build** → Astro construye el sitio estático
3. **Deploy** → Se despliega automáticamente a GitHub Pages

### Deploy Manual

```bash
# Construir para producción
npm run build

# Previsualizar la build
npm run preview
```

## 🎯 Secciones del Portafolio

1. **Principal** - Hero section con introducción y typewriter effect
2. **Sobre Mí** - Información personal y profesional
3. **Tecnologías** - Grid de tecnologías y herramientas
4. **Proyectos** - Showcase de proyectos con detalles
5. **Contacto** - Formulario funcional de contacto

## 🌙 Sistema de Temas

- **Toggle animado** con iconos de sol/luna
- **Persistencia** en localStorage
- **Transiciones suaves** entre temas
- **Variables CSS personalizadas** para cada tema

