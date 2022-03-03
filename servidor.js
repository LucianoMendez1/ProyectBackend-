const express = require('express');

const Contenido = require('./contenedor');


const app = express();

const PORT = 8080;

/* instacia la clase  */

const contenido = new Contenido ('productos.txt');

const server = app.listen(PORT,()=>{
    
    console.log(`Servidor Prendido ${server.address().port}`)
    
})


app.get('/productos',async (req,res)=>{
    const productos = await contenido.getAll();
    res.json(productos);

})


app.get('/productoRandom',async (req,res)=>{
     const producto = await contenido.getRandom();
     res.json(producto);
})




















