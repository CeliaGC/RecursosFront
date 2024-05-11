// const express = require('express');
import express from 'express';
// const loginController = require('./loginController');
import loginController from './loginController.js';

const app = express();

// Configuración del middleware para manejar las solicitudes POST de inicio de sesión
app.use('/login', loginController);

// Otras configuraciones y rutas de tu servidor...

// Iniciar el servidor
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
