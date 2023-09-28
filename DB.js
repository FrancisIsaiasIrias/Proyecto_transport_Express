// Importando los paquetes necesarios para el proyecto.
const mysql = require('mysql');
const express = require('express');
var app =express();
const bp = require('body-parser');
app.use(bp.json());

//Conexion a la base de datos
var mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'',
        database:'traex',
        multipleStatements:true
    }
);
//test de conexion
mysqlConnection.connect((err)=>{
if (!err) {
    console.log('conexion exitosa')
} else {
    console.log('error al conectar la base de datos')
}

});

//ejecutar el server puerto 3000

app.listen(3000,()=>console.log('server corriendo puerto 3000'));