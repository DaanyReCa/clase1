"use strict";
const fs = require("fs");
const express = require("express");
const PORT = 8080;
const app = express();
const URL = '/api/';
app.use(express.json());

let materias = [
    {
        id:1,
        nombre: "matematicas",
        temas: "sumas, restas y multiplcacion",
        nota: 5,
        categoria: "ciencias basicas"
    },

    {
        id:2,
        nombre: "ingles",
        temas: "verbo to be , pasado simple  y futuro",
        nota: 3,
        categoria: "lenguas extranjeras"
    },
    {
        id:3,
        nombre: "arte",
        temas: "lineas, curvas y puntos",
        nota: 5,
        categoria: "arte moderno"
    },
    {
        id:4,
        nombre: "sistemas",
        temas: "word, excel  y powerpoint",
        nota: 4,
        categoria: "tecnologia"
    }
];

function insertar(lista){
    fs.writeFile("./file.txt",JSON.stringify(lista),(error)=>{
        if(err){
            console.log(err);
        }
        console.log("Materia insertada con exito");
    })
}

app.get(URL,(req,res)=>{
    res.json(materias);
});
  
app.post(URL,(req,res)=>{
    let {id,nombre,temas,nota,categoria} = req.body;
    let materia = {id,nombre,temas,nota,categoria};
    materias.push(materia);
    res.json(materias);
    insertar(materias);

});

app.patch(URL+":id",(req,res)=>{
    
    let id = parseInt(req.params.id);
    let materia = req.body;
    let resultado = materias.find(x => x.id === id);

    materias[resultado] = materia;
    res.json(resultado);
    
});

app.delete(URL +":id",(req, res)=>{
    let id = parseInt(req.params.id);
    let resultado = materias.find(x => x.id === id);    

    let materia= materias[resultado] ;
    products.splice(materia, 1);
    res.send('materia eliminado con exito');
    
});

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}${URL}`);
  });