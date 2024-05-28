    let nom = document.getElementById("nom");
    let apell = document.getElementById("apell");
    let correo = document.getElementById("correo");
    let tel = document.getElementById("tel");
    let listaErrores = document.getElementById("listaErrores");
    let comentarios = document.getElementById("comentarios");

    function limpiar(){
        listaErrores.innerHTML= "";
            nom.classList.remove("error");
            apell.classList.remove("error");
            correo.classList.remove("error");
            tel.classList.remove("error");
            nom.classList.remove("correcto");
            apell.classList.remove("correcto");
            correo.classList.remove("correcto");
            tel.classList.remove("correcto");
    }
    function validarDato(){
        limpiar();
        //vaciamos la lista de errores:
            
        //creamos un arreglo donde guardar errores:
        let errores = [];
        //validar nombre, minimo una letra, no numeros, longitud mayor a 3 y menor que 30.
        //tomamos solamente el valor de nombre, no los espacios.
        let nombre = nom.value.trim();
            let regEx_nomyape = /^[A-Za-z]+$/;
            if(nombre.length == 0){
                errores.push("Para avanzar ingrese el nombre.");
                nom.classList.add("error");
            } else if(nombre.length > 30){
                errores.push("Su nombre es demasiado largo.");
                nom.classList.add("error");
            } else if(nombre.length > 0 && nombre.length < 3){
                errores.push("Su nombre es demasiado corto.");
                nom.classList.add("error");
            } else if(!regEx_nomyape.test(nombre)){
                errores.push("Su nombre solo debe contener letras.");
                nom.classList.add("error");
            } else{ 
                nom.classList.add("correcto");
            }
            
            
            
        //validar apellido:
        let apellido = apell.value.trim(); 
            if(apellido.length == 0){
                errores.push("Para avanzar ingrese el apellido.");
                apell.classList.add("error");
            } else if(apellido.length > 30){
                errores.push("Su apellido es demasiado largo, ingreselo nuevamente.");
                apell.classList.add("error");
            } else if( apellido.length > 0 && apellido.length < 3){
                errores.push("Su apellido es demasiado corto, ingreselo nuevamente.");
                apell.classList.add("error");
            } else if(!regEx_nomyape.test(apellido)){
                errores.push("Su apellido solo debe contener letras.");
                apell.classList.add("error");
            } else {
            apell.classList.add("correcto");
            }
            
        //validar numero telefonico:
            let regEx_tel = /^[1-9]\d{9}$/;
            if (tel.value.length > 10) {
                errores.push("Numero de teléfono muy largo");
                tel.classList.add("error");
            } else if(tel.value.length > 0 && !regEx_tel.test(tel.value)){
                errores.push("Su numero de telefono es incorrecto, no debe contener 0 al comienzo");
                tel.classList.add("error");
            } else if (tel.value.length == 0) {
                errores.push("Necesita ingresar su numero de telefono");
                tel.classList.add("error");
            } else {
            tel.classList.add("correcto");
            }
        //validar email:
        let regEx_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regEx_email.test(correo.value)){
            errores.push("Su correo electronico no es valido, pruebe con otro o intente corregirlo.");
            correo.classList.add("error");
        } else {
            correo.classList.add("correcto");
        }
        for (let aux of errores) {
            // Creamos un elemento li
            let li = document.createElement("li");
            // Modificamos el elemento li por el contenido de la variable aux
            li.innerHTML = aux;
            // Subimos el error a la lista de errores.
            listaErrores.appendChild(li);
        }

        if (errores.length == 0) {
            let li = document.createElement("li");
            li.innerHTML = `Hola ${nombre} ${apellido}, sus datos se han cargado correctamente!`;
            comentarios.appendChild(li);
            document.forms[0].reset();
            return false;
        } else {
            return false;
        }
    }
