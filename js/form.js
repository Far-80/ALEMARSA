var botonAdicionar = document.querySelector("#adicionar-proveedor");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); 
    var solicitud = capturarDatosPaciente(form);
    
    var errores = validarPaciente(solicitud);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }

    adicionarPacienteEnLaTabla(solicitud);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

});

function adicionarPacienteEnLaTabla(solicitud){
    var solicitudTr = construirTr(solicitud);
    var tabla = document.querySelector("#tabla-proveedores");
    tabla.appendChild(solicitudTr);
}


function capturarDatosPaciente(form){
    //capturando los datos del formulario
    var solicitud = {
        proveedor: form.proveedor.value,
        fecha: new Date().toLocaleDateString(),
        factura: form.factura.value,
        condicionPago: form.condicionPago.value,
        prioridad: form.prioridad.value,
        empresa: form.empresa.value,
        obra: form.obra.value,
        estado: "Pendiente de Autorizar",
    }
    return solicitud; 
}

function construirTr(solicitud){
     
       var solicitudTr = document.createElement("tr");     
       solicitudTr.classList.add("solicitud-pagos");
          
       solicitudTr.appendChild(construirTd(solicitud.proveedor,"info-proveedor"));
       solicitudTr.appendChild(construirTd(solicitud.fecha,"info-fecha"));
       solicitudTr.appendChild(construirTd(solicitud.factura,"info-factura"));
       solicitudTr.appendChild(construirTd(solicitud.condicionPago,"info-condicion-pago"));
       solicitudTr.appendChild(construirTd(solicitud.prioridad,"info-prioridad"));
       solicitudTr.appendChild(construirTd(solicitud.empresa,"info-empresa"));
       solicitudTr.appendChild(construirTd(solicitud.obra,"info-obra"));
       solicitudTr.appendChild(construirTd(solicitud.estado,"info-estado"));

       return solicitudTr; 
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(solicitud){
    var errores = []

    if(solicitud.proveedor.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(solicitud.factura.length == 0){
        errores.push("El numero de FC no puede estar vacío");
    }
    if(solicitud.condicionPago.length == 0){
        errores.push("La condición de pago no puede estar vacía");
    }
    if(solicitud.prioridad.length == 0){
        errores.push("La prioridad no puede estar vacío");
    }
    if(solicitud.empresa.length == 0){
        errores.push("La empresa no puede estar vacío");
    }
    if(solicitud.obra.length == 0){
        errores.push("La obra no puede estar vacío");
    }
    /*
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }*/
    return errores; 
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}