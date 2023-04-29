const{router} = require("express");
const {product} = require 
const routes = new Router();

routes.get("/health", (_,res) => res.send("check"))

const BASE ="/api/v1/products";
routes.get(BASE, async (req, res) => {
    const products= await product.find();
    res.jason(products);

})