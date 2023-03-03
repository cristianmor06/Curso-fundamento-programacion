alert ('Hola javascript') 

var numeiden = 1023916989;
var nombres = "Cristian David";
var apellidos = "Mora Marin";
var Direccion = "calle 130 #103-56";
var teléfono=3057721640;
var edad=30;
var Est_Civi="union libre";
var num_hijos=2;
var Est_cm= "162 cm";   
var fch_contra="02/07/2022";
var Suel_basi="1.000.000";
var dia_labo=250;

var concatenar = "Mi numero id:" + numeiden +
 " " + nombres + " " + apellidos;

 var datos = document.getElementById("datos");

 datos.innerHTML = `
 <h3>Mi Numero de identificacion: ${numeiden}</h3>
 <h3>Mi nombre es: ${nombres}</h3>
 <h3>Mis apellidos: ${apellidos}</h3>
 <h3>Mi Direccion: ${Direccion}</h3>
 <h3>Mi numero de telefono: ${teléfono}</h3>
 <h3>Mi edad: ${edad}</h3>
 <h3>Estado civil: ${Est_Civi}</h3>
 <h3>Estatura: ${Est_cm}</h3>`;

