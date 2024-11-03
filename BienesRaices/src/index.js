// const express   = require('express');
import express from "express";
import usuarioRouter from "./routers/usuarioRouter.js";
import db from "./config/db.js";

//Crear la app
const app = express();

// Habilitar lectura  de datos del formulario
app.use(express.urlencoded({ extended: true }));

//Conexion a la base de datos
try {
  await db.authenticate();
  db.sync()
  console.log("Conexion correcta a la base de datos!!..");
} catch (error) {
  console.log(`Ha ocurrido un error ${error}`);
}

//Routing
//La funcion .use se utiliza para escanear todas las rutas actuando como middlewares
app.use("/auth", usuarioRouter);

//Carpeta publicas
app.use(express.static("./src/public"));

//Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./src/views");

//Definir un puerto para iniciar
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`El servidor ha iniciado en el puerto ${PORT}`);
});
