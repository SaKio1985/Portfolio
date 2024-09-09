# Mi Portfolio en Next.js

![Logo del Creador de Portfolio](https://res.cloudinary.com/dko8avpyk/image/upload/v1725925370/jwt4hplzl2retohsdwwd.webp)

Este es mi portfolio personal, desarrollado utilizando Next.js.

## Estructura del proyecto

```
portfolio/
│
├── .next/
├── components/
│   ├── layout.js
│   └── navbar.js
├── node_modules/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── error.js
│   ├── 404.js
│   ├── blog.js
│   ├── github.js
│   ├── index.js
│   ├── posts.js
│   └── profile.js
├── public/
├── .gitignore
├── global.css
├── jsconfig.json
├── package-lock.json
├── package.json
└── README.md
```

## Características

- Diseño responsive
- Secciones para proyectos, habilidades y experiencia
- Integración con GitHub
- Blog integrado

## Tecnologías utilizadas

- Next.js
- React
- CSS Modules

## Cómo ejecutar el proyecto localmente

1. Clona este repositorio
   ```
   git clone https://github.com/SaKio1985/Portfolio
   ```
2. Navega al directorio del proyecto
   ```
   cd tu-portfolio
   ```
3. Instala las dependencias
   ```
   npm install
   ```
4. Ejecuta el servidor de desarrollo
   ```
   npm run dev
   ```
5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Despliegue

Este proyecto está diseñado para ser desplegado en plataformas como Vercel. Para más información sobre cómo desplegar una aplicación Next.js, consulta la [documentación oficial de Next.js](https://nextjs.org/docs/deployment).