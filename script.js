function VerMais_Biografia(){
    let pontos = document.getElementById('pontos');
    let MaisTexto = document.getElementById('mais');
    let btnVermais = document.getElementById('btnVermais');
    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        MaisTexto.style.display="none";
        btnVermais.innerHTML="Ver mais";
    }
    else{
        pontos.style.display="none"
        MaisTexto.style.display="inline";
        btnVermais.innerHTML="Ver menos"
    }

}
