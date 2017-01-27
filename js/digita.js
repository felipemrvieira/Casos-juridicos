// templates das mensagens
var templateMensagem = $('#hidden-template-mensagem').html();
var templateResposta = getElementById(botao-enviar);
console.log(templateResposta);

var mensagem = ["Olá, eu sou Eloisa. :)",
"Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar!",
"Antes de começarmos, como posso te chamar?",
"Prazer FULANO! Então, a primeira coisa a fazer, é identificar o problema que te trás aqui. Para isso, vou fazer algumas perguntas básicas, ok?",
"Qual a cidade que você mora?",
"Você quer contratar um advogado ou apenas tirar uma dúvida?",
"Do que se trata o seu caso?",
];
var i = 0;


var jsonMensagem = {
                    "id":"question_id",
                    "question":[{"text":"blá","speed":10}],
                    "input":{
                        "type":"button",
                        "answers":[
                            {"value":"","label":""}
                        ]},
                    }


    $('#conversa').append(templateMensagem);
    digita(mensagem[i], 3);


$('body').click(function() {
    $('#conversa').append(templateResposta);
    digita(mensagem[i], 3);

});

function chamaDigita() {
    //INSERE O TEMPLATE DE MENSAGEM
    $('#conversa').append(templateResposta);
    //MANTEM O FOCO NA ULTIMA MENSAGEM
    $(document).scrollTop(1000);
    digita(mensagem[i], 3);

};

function digita(mensagem, tempo){
    $("#txt:last-child").typed({
      strings: [mensagem],
      typeSpeed: tempo,
      callback: function() {chamaDigita()}
    });
    i += 1;
};
