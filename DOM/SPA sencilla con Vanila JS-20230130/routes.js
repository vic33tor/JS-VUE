export const PATHS = {
  home: {
    path: "/",
    template: `
            <h1>🏠 Inicio</h1>
            <p>Pues este es el inicio</p>
            <img src="https://source.unsplash.com/random/400x300" alt="Random Image">
        `,
  },
  about: {
    path: "/about",
    template: `
            <h1>👩🏻‍💻 Sobre mí</h1>
            <p>Cosas sobre mí</p>
            <img src="https://source.unsplash.com/random/500x400" alt="Random Image">
        `,
  },
  contact: {
    path: "/contact",
    template: `
            <h1>📱 Contacto</h1>
            <p>Contacto 666-333-333</p>
            <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
        `,
  },
  ERROR: {
    path: "/ERROR",
    template: `
            <h1>🎃 Error</h1>
            <p>No tenemos definida esta url en nuestra ruta</p>
            <img src="https://source.unsplash.com/random/600x500" alt="Random Image">
        `,
  },
};
