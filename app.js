const express= require('express');
const app= express();
const path= require('path');
/* Es necesario para Heroku, ya que tiene su propio puerto
Si esta la variable definida */
const PORT= process.env.PORT || 4000;
/* No es necesario, buena para los casos que tenemos otro servidor*/
const HOST= process.env.HOST || 'localhost';

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.listen(PORT, ()=>{ console.log('Server running at '+ PORT)});

