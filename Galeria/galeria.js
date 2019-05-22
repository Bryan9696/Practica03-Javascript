
    lista=[{"id":1,"imagen":"https://ichef.bbci.co.uk/news/660/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg"},
    {"id":2,"imagen":"https://media.metrolatam.com/2019/04/18/dragonballsuper-14f4bd3bbda1914943c3d74cb9d94c53-600x400.jpg"},
    {"id":3,"imagen":"https://www.rockandpop.cl/wp-content/uploads/2018/03/super.png"},
    {"id":4,"imagen":"https://www.diariogol.com/uploads/s1/60/40/14/5/leo-messi-champions-2_15_970x597.jpeg"},
    {"id":5,"imagen":"https://img.blogs.es/bloglenovo/wp-content/uploads/2018/05/fortnite.jpg"},
    {"id":6,"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-ueGb1t_nJ8L5vWwO1KCWWh0fLBP4sYYux9TsR7tc-8N67i6"},
    {"id":7,"imagen":"https://i.pinimg.com/originals/8a/ac/44/8aac44c81c672ec730f36b0dbb8845a3.jpg"},
    {"id":8,"imagen":"https://upload.wikimedia.org/wikipedia/commons/2/2c/Universidad_Polit%C3%A9cnica_Salesiana%2C_Cuenca_Ecuador_01.JPG"},
    {"id":9,"imagen":"http://plantillo.net/uploads/U1ad04fcp2kR9Hux7JHm-1518420297.png"},
    {"id":10,"imagen":"https://media.metrolatam.com/2019/04/08/gameofthronesfjkladafkldkf-dd7fc66c338eb986fa7c44215bfd0c21-600x400.jpg"}];
    
    imag = [1,2,3,4,5];
    var cont=0;
    
    function inicio(){
        for (i=0 ; i<5; i++){
            
            imag[i] = Math.floor(Math.random() * (10));    
                      
        }
        cont = 0;
        
        verificar();
        imprimir();
    }
    
    //creo una función que muestre la imagen en una section ya creada en el archivo html,
    function imprimir(){
        console.log(imag);
        //creo codigo html como texto tomando el valor de la lista.
        var texto = "<img src="+lista[imag[cont]].imagen+">";
        //ingresa el codigo HTML al section con id imagen.
         window.document.getElementById("imagen").innerHTML =texto;
        
    }
    function verificar(){
        //Verfica si ya se esta en la ultima imagen para deshabilitar el boton siguiente
        if(cont==4){
             window.document.getElementById("btn_siguiente").disabled = true;
            window.document.getElementById("btn_anterior").disabled = false;
       
        }
        //conpruebo si se está mostrando la primera imagen par deshabilitar el boton anterior
        else if(cont == 0){
                  window.document.getElementById("btn_anterior").disabled = true;
                window.document.getElementById("btn_siguiente").disabled = false;
       
        }else{
             window.document.getElementById("btn_siguiente").disabled = false;
                  window.document.getElementById("btn_anterior").disabled = false;
            
       
        }
    }
    
    function anterior(){
        cont--;
        verificar();
        imprimir();
        
    }
    function siguiente(){
        
        cont++;
        verificar();
        imprimir();
        
        
    }