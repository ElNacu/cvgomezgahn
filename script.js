function display_texto(idtexto){
    const elemento=document.getElementsByClassName("info");
    const boton=document.getElementsByClassName("boton");
    if (elemento[idtexto-1].style.display=="block"){
        elemento[idtexto-1].style.display="none"; 
        boton[idtexto-1].style.border="0px"
    }
    else {
        elemento[idtexto-1].style.display="block"; 
        boton[idtexto-1].style.border="2px solid grey"
    }
}
