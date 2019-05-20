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
           if(cont.test(apellido.value)==true){
             
            apellido.style.borderColor ="red";
            valApellido = false;
          var aux = apellido.value.substring(apellido.value.length-1);
           var rempla = apellido.value.replace(aux,"");
           apellido.value=rempla;
      }
          //valida que el campo tenga el formato solicitado
          else if (n.test(apellido.value)==true){
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

        function validaCedula(num){
    
            tecla = num.keyCode | num.which;
             var cadena = window.document.getElementById("cedula").value.trim();
             cedula.style.borderColor ="none";
             
                var total = 0;
                var longitud = cadena.length;
                var verificador = longitud - 1;
        
              
                  for(i = 0; i < verificador; i++){
                    if (i%2 === 0) {
                      var aux = cadena.charAt(i) * 2;
                      if (aux > 9) aux -= 9;
                      total += aux;
                    } else {
                      total += parseInt(cadena.charAt(i)); 
                    }
                  }
        
                  total = total % 10 ? 10 - total % 10 : 0;
        
             
            
                  if (cadena.charAt(longitud-1) == total && longitud==10) {
            
                    console.info("cedula Valida" );
                      cedula.style.borderColor ="blue";
                      valCedula=true;
                  }else if(longitud!=10){
                    console.info("cedula invalida" );
                      cedula.style.borderColor ="red";
                      valCedula = false;
                     
                  }
            
        }

        function validar_correo()
        {
            var contenido=document.getElementById('correo').value;
            var conte=contenido.split("@");
            if(!conte[1] || conte[0]=="")
            {
            // alert('no es correo valido(1)');
            }
            else
            {
              var cont1=conte[0].split(".");
              var cont2=conte[1].split(".");
              if(!cont1[1])
              {
             //  alert('no es correo valido(2)');
              }
              else if(!cont2[1])
              {
                alert('no es correo valido(3)');
              }
            }
          }


          

function validaTodo(formulario01){
    var verdad = false;

    if(valCedula==false){
        window.document.getElementById("mensajeCedula").innerHTML = "<p>Cedula Incorrecta</p>"
        console.info("revise los digitos");
       
        
    }
    else{
         window.document.getElementById("mensajeCedula").innerHTML = "<p></p>"
        
    }
    if(valNombre==false){
        window.document.getElementById("mensajeNombres").innerHTML = "<p>Nombres mal Ingresados</p>"
        console.info("revise los digitos");
       
        
    }
    else{
         window.document.getElementById("mensajeNombres").innerHTML = "<p></p>"
       
    }
    if(valApellido==false){
        window.document.getElementById("mensajeApellidos").innerHTML = "<p>Apellidos mal  Ingresados</p>"
        console.info("revise los digitos");
         
        
    }
    else{
         window.document.getElementById("mensajeApellidos").innerHTML = "<p></p>"
        
        
    }
    if(valDirreccion==false){
        window.document.getElementById("mensajeDireccion").innerHTML = "<p>Direccion Incorecta</p>"
        console.info("revise los digitos");
         
        
        
    }
    else{
         window.document.getElementById("mensajeDireccion").innerHTML = "<p></p>"
       
    }
    if(valTelefono==false){
        window.document.getElementById("mensajeTelefono").innerHTML = "<p>Telefono mal ingresada</p>"
        console.info("revise los digitos");
        
        
    }
    else{
 window.document.getElementById("mensajeTelefono").innerHTML = "<p></p>"

    }
    if(valFecha==false){
        window.document.getElementById("mensajeFecha").innerHTML = "<p>Fecha mal ingresada</p>"

    }else{
        window.document.getElementById("mensajeFecha").innerHTML = "<p></p>"

    }

    if(valEmail==false){
        windows.document.getElementById('mensajeCorreo').innerHTML="<p>Correo  incorrecta</p>"
        console.info("revise los digitos");

    }else{
        window.document.getElementById('mensajeCorreo').innerHTML="<p></p>"
    }
    if(valContrasenia==false){
        windows.document.getElementById('mensajeContrasena').innerHTML="<p>Contrasena incorrecta</p>"
        console.info("revise los digitos");
    }else{
        window.document.getElementById('mensajeContrasena').innerHTML="<p></p>"
    }

    
}
 

    