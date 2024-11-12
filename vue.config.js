module.exports = {
  devServer: {
    host: '0.0.0.0',                 // Escucha en todas las interfaces de red
    port: process.env.PORT || 8080,  // Usa el puerto proporcionado por Railway o el 8080 como respaldo
  },
};
