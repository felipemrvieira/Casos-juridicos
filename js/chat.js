
var template = $('#hidden-template').html();
var mensagem = ["Olá, meu nome é Eloisa! Como posso ajudá-lo?", "OK! Deixe-me ver..."];
var i = 0;

$(function() {
    $('#conversa').append(template);
    digita(mensagem[i], 30);
    i += 1;
});

$('body').click(function() {
    $('#conversa').append(template);
    digita(mensagem[i], 30);
    i += 1;
});

function digita(mensagem, tempo){
    $(".texto:last-child").typed({
      strings: ["<p>"+mensagem+"</p>"],
      typeSpeed: tempo
    });
};
