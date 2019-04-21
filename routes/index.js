var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//PREGUNTA NRO 1
 /* Tedan una serie de enteros positivos: los pesos de las personas. Devuelva una
matriz de dos enteros, donde el primer elemento es el peso total del equipo 1, y el
segundo elemento es el peso total del equipo 2 después de completar la división.
Para a = [50, 60, 60, 45, 70], la salida debe ser [180, 105] */
router.get('/preg1CADENAS', function(req, res) {

 var cadValues = req.query.params;
 var aux1  = cadValues.split("-");
 var result = new Array(0,0);
 for (let i=0; i<aux1.length; i++){
   if(i%2 == 0){
     result[0]+= parseInt(aux1[i]);
   }
   else {
     result[1]+= parseInt(aux1[i]);
   }
 }
 res.status(200).json({
   msn: "la suma de pesos del grupo 1 y 2 son : " + result
 });
});


//EJERCICIO 2 DE LA  PREGUNTA 1
/*Dada una matriz rectangular de caracteres, agregue un borde de
asteriscos (*).
picture = ["abc","ded"]
la salida debera ser
["*****",
"*abc*",
"*ded*",
"*****"] */
router.post('/matrix', function(req, res){
  var picture = req.body.picture.split(",");
  var cad = new Array(0,0);
  var asterisk = "";
  for (let i=0; i<picture[0].length + 2; i++){
    asterisk = asterisk + "*";
    cad[0]   = asterisk;
    cad[picture.length +1] = asterisk;
  }
  for (let j=1; j<picture.length + 1; j++){
    cad[j]= "*" + picture[j-1] + "*";
  }
  res.status(200).json({
    msn: cad
  });
});




module.exports = router;
