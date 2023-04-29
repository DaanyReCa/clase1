const express = require ("express");
const products = require('./products');
const url = 'http://localhost:';
const port = 8088

const app = express()

app.get("/", (req, res) => {
    res.json(products)
})

app.get("/api/v1/producId", (req,res) => {
    const { producId } = req.params;
    const producIdItnt = parseInt(producId)
    const product = productd.find(product => product.id === producIdItnt)
    res.json(product)
})

app.listen(port, () =>{
    console.log(`Aplicación levantada en ${url}${port}`);
})