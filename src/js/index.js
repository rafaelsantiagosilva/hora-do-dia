function horario(){
    var horaMsg = document.getElementById('hora_atual');
    var img = document.querySelector('img');

    var horaAtual = new Date();
    horaAtual = horaAtual.getHours();

    var minutosAtuais = new Date();
    minutosAtuais = minutosAtuais.getMinutes();

    horaMsg.innerHTML = `Agora são ${horaAtual}:${minutosAtuais}`;

    if(horaAtual >= 0 && horaAtual < 6 || horaAtual >= 18){
        img.setAttribute('src', './src/img/noite.jpg');
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #000000, #200620, #320444, #09093f)'; 
    } else if(horaAtual >= 6 && horaAtual < 12){
        img.setAttribute('src', './src/img/dia.jpg');
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #155df8, #2798da, #7bb7eb, #80c4ff)';
    } else{
        img.setAttribute('src','./src/img/tarde.jpg');
        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #d4a011, #ff6600, #d85b21,#ff3c00)';
    }

}

function volte(){
    document.querySelector('h1').innerHTML = '(volte aqui outro horário: manhã, tarde, noite)';
}

function volte2(){
    document.querySelector('h1').innerHTML = 'Hora do Dia';
}

// FONTES DAS IMAGENS: //

// Foto de Peter Steiner 🇨🇭 1973: https://www.pexels.com/pt-br/foto/alvorecer-amanhecer-aurora-luz-do-dia-17019812/
// Foto de Griffin Wooldridge: https://www.pexels.com/pt-br/foto/de-tirar-o-folego-impressionante-brilhante-luminoso-5118298/
// Foto de Mohan Reddy: https://www.pexels.com/pt-br/foto/luzes-do-norte-sobre-montanha-e-floresta-4388593/