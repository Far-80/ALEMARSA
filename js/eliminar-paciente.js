var tabla = document.querySelector("#tabla-proveedores");
tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");    
    setTimeout(function(){
        event.target.parentNode.remove();    
    },500);
});