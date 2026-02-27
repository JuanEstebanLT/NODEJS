const express = require('express');
const router = express.Router();

const productos = [
{id:1, nombre:'Pc',precio: 2000, descripcion: 'Computadora de escritorio', stock: 10, categoria: 'Electrónica'},
{id:2, nombre:'Laptop',precio: 3000, descripcion: 'Computadora portátil', stock: 5, categoria: 'Electrónica'},
{id:3, nombre:'Mouse',precio: 50, descripcion: 'Mouse inalámbrico', stock: 20, categoria: 'Electrónica'}

];    

// GET - Obtener todos los productos
router.get('/productos', (req, res) => {
    res.json({ success: true, data: productos });
});

// GET - Obtener un producto por ID
router.get('/productos/:id', (req, res) => {
    const product  = productos.find(u => u.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ success: false, message: 'Producto  no encontrado' });
    } else {
        res.json({ success: true, data: product });
    }

});


module.exports = router;