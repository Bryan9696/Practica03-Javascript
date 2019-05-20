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
 if(cont.test(nombre.value)==true){
       
      nombres.style.borderColor ="red";
      valNombre = false;
     var aux = nombre.value.substring(nombre.value.length-1);
     var rempla = nombre.value.replace(aux,"");
     nombre.value=rempla;
     
}


    //verifica que el campo Nombre contenga solo letras 
    else if (n.test(nombre.value)==true){
        nombres.style.borderColor ="blue";
        valNombre=true;
    }else{
         nombres.style.borderColor ="red";
         valNombre=false;
    }
    
    }

    function validarNumeros1(num){   
    
        tecla = num.keyCode || num.which;  
          
          var apellido = window.document.getElementById("apellidos");
          
              //valida que el campo no contenga numeros 
           if(expre.test(apellido.value)==true){
             
            apellido.style.borderColor ="red";
            valApellido = false;
          var aux = apellido.value.substring(apellido.value.length-1);
           var rempla = apellido.value.replace(aux,"");
           apellido.value=rempla;
      }
          //valida que el campo tenga el formato solicitado
          else if (expreL.test(apellido.value)==true){
          apellido.style.borderColor ="blue";
          valApellido = true;
      }
          else{
               apellidos.style.borderColor ="red";
               valApellido = false;
      }
      }


      //funcion que valida el campo de telefono
    function validarLetras1(num){   
   
        tecla = num.keyCode || num.which;
        var telefono = window.document.getElementById("telefono");
            telefono.style.borderColor = "none";
            
            //verifica que no se ingrese una letra en el campo 
         if((tecla>64&& tecla<91) || tecla==194){            
            telefono.style.borderColor = "red";
            valTelefono=false;
             var aux = telefono.value.substring(telefono.value.length-1);
         var rempla = telefono.value.replace(aux,"");
         telefono.value=rempla;
             
                   }  else{
                       telefono.style.borderColor = "blue";
                       valTelefono=true;
                 }
        
        }