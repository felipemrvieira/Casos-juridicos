angular.module('casosJuridicos').controller('ChatController', ['$location' ,'$interval', '$window', function($location, $interval, $window){

  var self = this;

  self.usuario = {
      nome : '',
      tipo : '',
      email: '',
      telefone: ''
  };

  self.escondeForm = true;


  var mensagem = ["Olá, eu sou Eloisa! :)", -20,
  "Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar!",-90,
  "Antes de começarmos, como posso te chamar?",-40,
  "formNome",-70,


  "fim", 8,
  ];

  var i = 0
  var time = 1500;
  var templateMensagem = $('#hidden-template-mensagem').html();
  var templateResposta = $('#hidden-template-resposta').html();
  var templateForm = $('#hidden-template-form').html();


  $(function(){
      $("#intro-msg").typed({
        strings: ["^1000 Olá, eu me chamo Eloisa!", "Sou a assistente virtual que vai te atender.",
         "Fique tranquilo, suas informações ficarão em sigilo! ^2000"],
        typeSpeed: 0,
        backSpeed: -40,
        callback: function() {
          $("#intro").addClass("fadeOutUpBig");
          $("#teste").removeClass("hide");
          $("#teste").addClass("bounceInUp");


        }
      });
  });


  // var enviaMsg = $interval(function(){
  //     validaMsg();
  //     time = 5000;
  //   }, time, 5);

    function digita(mensagem, tempo){
      $("#txt:last-child").typed({
        strings: [mensagem],
        typeSpeed: tempo
      });
    };

    function validaMsg(){
      if(mensagem[i]==="fim"){
        $interval.cancel(enviaMsg);
      }else if (mensagem[i]==="formNome") {
        self.escondeForm = false;
        $interval.cancel(enviaMsg);
      }else{
        $('#conversa').append(templateMensagem);
        digita(mensagem[i], mensagem[i+1]);
        i += 2;
      }
    }

    self.enviaNome = function(){
      self.escondeForm = true;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente').text(primeiraLetra);
      $("#txt:last-child").text("Me chamo " + self.usuario.nome);

    }

    primeiraLetra = function(){
      self.usuario.letra = self.usuario.nome.substring(0, 1);
      return self.usuario.letra
    }



}]);
