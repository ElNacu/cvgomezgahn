function display_texto(idtexto){
    /*if (idtexto==1){
        const elemento=document.getElementsByClassName("desc_general");
        const boton=document.getElementsByClassName("btn1");
        if (elemento[0].style.display=="block"){
            elemento[0].style.display="none"; boton[0].style.border="0px"}
        else {elemento[0].style.display="block"; boton[0].style.border="3px solid grey"}
    }
    if (idtexto==2){
        const elemento=document.getElementsByClassName("formacion");
        const boton=document.getElementsByClassName("btn2");
        if (elemento[0].style.display=="block"){
            elemento[0].style.display="none"; boton[0].style.border="0px"}
        else {elemento[0].style.display="block"; boton[0].style.border="3px solid grey"}
    }
    if (idtexto==3){
        const elemento=document.getElementsByClassName("exp");
        const boton=document.getElementsByClassName("btn3");
        if (elemento[0].style.display=="block"){
            elemento[0].style.display="none"; boton[0].style.border="0px"}
        else {elemento[0].style.display="block"; boton[0].style.border="3px solid grey"}
    }
    if (idtexto==4){
        const elemento=document.getElementsByClassName("conoc");
        const boton=document.getElementsByClassName("btn4");
        if (elemento[0].style.display=="block"){
            elemento[0].style.display="none"; boton[0].style.border="0px"}
        else {elemento[0].style.display="block"; boton[0].style.border="3px solid grey"}
    }*/
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