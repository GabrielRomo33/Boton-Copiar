function copiarTexto() {
    //Selecciona el elemento de texto
    var elementoText = document.getElementById("texto");
    
    //Crea un area de texto temporal
    var areaTextoTemporal = document.createElement("textarea");
    areaTextoTemporal.value = elementoText.textContent;

    //añador el area de texto temporal al DOM 
    document.body.appendChild(areaTextoTemporal);

    //Seleccionar y copiar el texto del area de texto temporal 
    areaTextoTemporal.select();
    document.execCommand('copy');

    //Eliminar el area de texto temporal del DOM 
    document.body.removeChild(areaTextoTemporal);
    
    //Mostrar mensaje o realizar cualquier otra accion despues de copiar
    alert(`Texto Copiado ${elementoText}`);
}