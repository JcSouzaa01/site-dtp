function rootPage(){
    let campoUser = document.getElementById('user');
    let campoSenha = document.getElementById('senha');

    if(campoUser.value == "adm" && campoSenha.value == "123"){
        window.location.href = "sitedtp.html";
    }
    else {
        console.log('Algo deu errado!')
    }
}