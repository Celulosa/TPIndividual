const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(process.env.PORT || 3000,() =>{
    console.log('Servidor en puerto 3000 OK');
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'));
    });

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'));
    });
app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/registro.html'));
    });
