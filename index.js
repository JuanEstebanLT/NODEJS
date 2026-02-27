const express = require('express');
const app = express();
const port = 3000;

const UsuariosRoutes = require('./usuarios/UsuariosRoutes');
const ProductosRoutes = require('./productos/ProductosRoutes.js');
app.use(express.json());
app.use('/api', UsuariosRoutes);
app.use('/api', ProductosRoutes);

app.listen(port, () => { console.log("Server esta arriba " + port) });