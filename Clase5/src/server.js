require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();+

const start = async () => {
    try{
        //codigo para conectar
        await mongoose.connect(process.env.MONGO_CONNECION)
        app.listen(port,() =>{
            console.clear();
            console.log("aplicacion corriendo en el puerto", port);
        })
    } catch(error){
        console.error(error);
        process.exit(1);
    }
};

start();