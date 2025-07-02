# 🚀 Portfolio 2026 - Marcello Lopes

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.167.1-black?logo=three.js&logoColor=white)](https://threejs.org)

<!-- Application Screenshot Placeholder -->
![Application Screenshot](https://lopesmarcello.vercel.app/en/screenshot.png)

### [Marcello Lopes' Portfolio](https://lopesmarcello.vercel.app/)

A modern, performance-optimized portfolio website featuring cutting-edge web technologies, immersive visual effects, and exceptional user experience. Built with accessibility and performance as top priorities.

## ✨ Features

### 🌐 Internationalization (i18n)

- **Multi-language Support**: Seamlessly switch between English and Portuguese (Brazil) using Next.js App Router and custom `useTranslation` hook.
- **Dynamic Content**: All user-facing text is managed through JSON locale files, enabling easy content updates and expansion to new languages.
- **Locale-aware Routing**: URLs are structured to include the active locale (e.g., `/en/about`, `/pt-BR/about`).



### 🎨 **Visual Excellence**

### 🌐 Internationalization (i18n)

- **Custom WebGL Shaders**: Dithered wave patterns with mouse interaction
- **Advanced Post-Processing**: Retro-style dithering effects using postprocessing library
- **Silk Noise Backgrounds**: Procedural animated textures with Three.js
- **Canvas-based Film Grain**: Customizable noise overlay for cinematic feel
- **Smooth Animations**: 60fps animations powered by Framer Motion and GSAP

### 🏗️ **Architecture & Performance**

- **Next.js 15.3.4** with App Router and React Server Components
- **Server-Side Rendering (SSR)** for optimal SEO and initial load performance
- **Static Generation** for lightning-fast page loads
- **Turbopack** for ultra-fast development builds
- **Code Splitting** and lazy loading for optimized bundle sizes
- **Device Capability Detection** for performance-adaptive rendering

### 📱 **User Experience & Accessibility**

- **Full-Page Scroll System** with multiple input methods:
  - Mouse wheel navigation
  - Keyboard navigation (Arrow keys, Page Up/Down)
  - Touch/swipe gestures with velocity detection
  - Visual progress indicators
- **Responsive Design** optimized for all device sizes
- **Touch-Optimized** with custom gesture handling
- **Screen Reader Support** with proper ARIA labels and live regions
- **Error Boundaries** for graceful error handling
- **Semantic HTML** structure

### 🔧 **Advanced Technical Features**

- **Performance Monitoring**: Hardware acceleration detection
- **Network-Aware**: Connection quality assessment
- **Mobile Optimization**: Reduced animations on low-power devices
- **WebGL Fallbacks**: Graceful degradation for unsupported devices
- **Custom Hook System**: Reusable device capability detection
- **Type Safety**: Full TypeScript implementation

### 🎪 **Interactive Components**

- **Dynamic Project Gallery**: Embla Carousel with drag-free scrolling
- **GitHub Integration**: Real-time repository data fetching
- **Infinite Scroll Animation**: GSAP-powered continuous scrolling lists
- **Mouse-Interactive Backgrounds**: Shader-based visual effects
- **Navigation Progress**: Visual section indicators

## 🛠️ Tech Stack

### **Core Framework**

- **Next.js 15.3.4** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5.0** - Type-safe development

### **Styling & UI**

- **TailwindCSS 4.0** - Utility-first CSS framework
- **Framer Motion 12.19.2** - Production-ready motion library
- **Lucide React** - Beautiful SVG icons

### **3D Graphics & Animation**

- **Three.js 0.167.1** - 3D graphics library
- **@react-three/fiber 9.1.4** - React renderer for Three.js
- **@react-three/postprocessing 3.0.4** - Post-processing effects
- **GSAP 3.13.0** - Professional animation library
- **OGL 1.0.11** - Lightweight WebGL library

### **Enhanced Interactions**

- **Embla Carousel React 8.6.0** - Smooth carousel component
- **Custom Canvas Animations** - Film grain and noise effects

### **Development & Quality**

- **ESLint** with Next.js configuration
- **Geist Font** - Optimized typography
- **Error Boundaries** - Production error handling

## 🎯 Performance Optimizations

### **Adaptive Rendering**

- Device capability detection prevents heavy animations on low-end devices
- WebGL support detection with Canvas 2D fallbacks
- Network quality assessment for content optimization
- Mobile-specific optimizations and reduced motion

### **Bundle Optimization**

- Tree-shaking and dead code elimination
- Dynamic imports for heavy 3D components
- Image optimization with Next.js Image component
- Font optimization with next/font

### **Runtime Performance**

- 60fps animations with hardware acceleration
- Efficient WebGL shader compilation
- Optimized re-renders with React.memo and useMemo
- Proper cleanup of animation frames and event listeners

## ♿ Accessibility Features

### **Navigation**

- Keyboard navigation support (Arrow keys, Page Up/Down)
- Screen reader announcements for section changes
- Focus management and visual indicators
- Skip links for main content areas

### **Visual Accessibility**

- High contrast design with accessible color ratios
- Reduced motion respect for users with vestibular disorders
- Scalable text and responsive design
- Clear visual hierarchy and semantic structure

### **Screen Reader Support**

- Proper ARIA labels and roles
- Live regions for dynamic content updates
- Semantic HTML structure
- Alternative text for visual elements

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── sections/          # Portfolio sections
│   │   ├── Introduction/  # Hero section
│   │   ├── About/         # About section with infinite scroll
│   │   ├── Projects/      # Project gallery with carousel
│   │   └── Contact/       # Contact information
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with error boundary
│   └── page.tsx           # Main page composition
├── components/            # Reusable components
│   ├── animations/        # Canvas-based animations
│   ├── backgrounds/       # WebGL background effects
│   ├── ErrorBoundary/     # Error handling component
│   ├── FullPageScroll/    # Main navigation system
│   ├── InfiniteScroll/    # GSAP-powered infinite scroll
│   ├── NavigationProgress/# Visual progress indicator
│   └── ProjectCard/       # Project display component
├── hooks/                 # Custom React hooks
│   └── useDeviceCapabilities.tsx # Performance detection
├── lib/                   # Utility functions
│   └── utils.ts           # Navigation and GitHub API helpers
└── types/                 # TypeScript type definitions
    └── github.ts          # GitHub API response types
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Marcello Lopes**

- GitHub: [@lopesmarcello](https://github.com/lopesmarcello)
- LinkedIn: [mlopes30](https://linkedin.com/in/mlopes30)
- Email: marcellolopesdev@gmail.com

---

🌟 **Star this repository if you found it helpful!**
