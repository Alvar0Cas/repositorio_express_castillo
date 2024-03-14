// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Tenis Under Armour Charged Verssert Speckle Hombre', descripcion: '', cantidad: 10, precio: '$1,599.00', imagen: 'tenis 1.jpg' },
    { id: 2, nombre: 'Taquetes Adidas Predator League TF Hombre', descripcion: '', cantidad: 15, precio: '$1,499.00', imagen: 'tenis 2.jpg' },
    { id: 3, nombre: 'Tenis Nike Alpha Trainer 5 Hombre', descripcion: '', cantidad: 5, precio: '$1,999.00', imagen: 'tenis 3.jpg' },
    { id: 4, nombre: 'Tenis Nike Precision 6 Hombre', descripcion: '', cantidad: 10, precio: '$2,200.00', imagen: 'tenis 4.jpg' },
    { id: 5, nombre: 'Tenis Nike Pegasus 40 Hombre', descripcion: '', cantidad: 15, precio: '$2,000.00', imagen: 'tenis 5.jpg' },
    { id: 6, nombre: 'Tenis Nike LeBron Witness 8 Hombre', descripcion: '', cantidad: 5, precio: '$2,499.00', imagen: 'tenis 6.jpg' },
    { id: 7, nombre: 'Tenis Nike Court Vision Low Hombre', descripcion: '', cantidad: 5, precio: '$2,999.00', imagen: 'tenis 7.jpg' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  