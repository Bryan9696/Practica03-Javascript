var valCedula = false;
var valNombre = false;
var valApellido = false;
var valEmail = false;
var valTelefono = false;
var valDirreccion =   false;
var valFecha= false;
var valContrasenia =false;
var cont = /[0-9]/;
var n =/[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;

//funcion que valida el campo de Nombre 
function validarNumeros(num){   
   
    tecla = num.keyCode || num.which;   
    var nombre = window.document.getElementById("nombres");
 //verifica que el campo no contenga numeros
 if(expre.test(nombre.value)==true){
       
      nombres.style.borderColor ="red";
     valNom = false;
     var aux = nombre.value.substring(nombre.value.length-1);
     var rempla = nombre.value.replace(aux,"");
     nombre.value=rempla;
     
}

