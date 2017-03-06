angular.module('casosJuridicos').controller('ChatController', ['$location' ,'$interval', '$window', function($location, $interval, $window){

  var self = this;

  self.usuario = {
      nome : '',
      letra : '',
      tipo : '',
      descricao : '',
      email: '',
      telefone: ''
  };

  self.escondeForm = true;
  self.escondeFormTipo = true;
  self.escondeFormDescricao = true;
  self.escondeFormEmail = true;
  self.escondeFormTelefone = true;



  var mensagem = ["Olá, eu sou Eloisa! :)", -70,
  "Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar! ^2000",-90,
  "Antes de começarmos, como posso te chamar? ^500",-50,
    "formNome",-70,
  "Vou fazer mais algumas perguntas para poder entender seu caso.",-70,
  "Selecione uma opção que mais se parece com o seu caso",-70,
    "formTipo",-70,
  "Certo!",-70,
  "Para que possamos selecionar o melhor advogado para seu caso jurídico, preciso que você o detalhe para mim! ^2500",-70,
    "formDescricao",-70,
  "Entendi! Estamos quase finalizando. ^2500",-70,
  "Para encaminhar seu caso para um advogado precisaremos de algumas informações de contato.^1500",-70,
  "Qual o seu email? ^500",-70,
    "formEmail",-70,
  "E o seu telefone? ^500",-70,
    "formTelefone",-70,
  "Certo, anotei tudinho aqui! ^1000",-70,
  "Vou analisar seu caso com calma e te encaminhar para o melhor advogado disponível ^1500",-70,
  "Enquanto isso, verifique seu email! Dentro de alguns minutos enviaremos algumas informações.  ^1500",-70,

  "Até mais! ^2500",-70,



  "fim", 8,
  ];

  var i = 0
  var time = 1500;
  var templateMensagem = $('#hidden-template-mensagem').html();
  var templateResposta = $('#hidden-template-resposta').html();
  var templateForm = $('#hidden-template-form').html();


  $(function(){
      $("#intro-msg").typed({
        strings: ["^1500 Olá, eu me chamo Eloisa! ^2000", "Sou a assistente virtual que vai te atender.^2000",
         "Fique tranquilo, suas informações ficarão em sigilo! ^3000"],
        //  strings: [" Olá"],
        typeSpeed: 0,
        backSpeed: -40,
        callback: function() {
          $("#intro").addClass("fadeOutUpBig");
          $("#avatar-eloisa").removeClass("hide");
          $("#avatar-eloisa").addClass("bounceInUp");
          enviaMsg();
        }
      });
  });


    var enviaMsg = function(){
      $interval(function(){
        validaMsg();
        time = 1200;
      }, time, 1);
    }



    function digita(mensagem, tempo){
      $(document).scrollTop(1000);
      $('#txt:last-child').typed({
        strings: [mensagem],
        typeSpeed: tempo,
        callback: function() {
          enviaMsg();
        }
      });
      $(document).scrollTop(1000);
    };

    function validaMsg(){
        // console.log(self.usuario)
      switch (mensagem[i]) {
        case "fim":
          $interval.cancel(enviaMsg);
          break;
        case "formNome":
          self.escondeForm = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        case "formTipo":
          self.escondeFormTipo = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        case "formDescricao":
          self.escondeFormDescricao = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        case "formEmail":
          self.escondeFormEmail = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        case "formTelefone":
          self.escondeFormTelefone = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        default:
          $('#conversa').append(templateMensagem);
          digita(mensagem[i], mensagem[i+1]);
          i += 2;
          $(document).scrollTop(1000);

      }
    }

    self.enviaNome = function(){
      self.escondeForm = true;
      self.usuario.letra = self.usuario.nome.substring(0,1).toUpperCase();
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      // $('#txt:last-child').text(self.usuario.nome)
      digita("Me chamo " + self.usuario.nome, -8000);
    }

    self.selTipo = function(){
      self.escondeFormTipo = true;
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      $('#txt:last-child').text("problema")
      digita("Estou com problema relacionado a área: " + self.usuario.tipo, -7000);
    }

    self.enviaDescricao = function(){
      self.escondeFormDescricao = true;
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      digita(self.usuario.descricao, -8000);
    }

    self.enviaEmail = function(){
      self.escondeFormEmail = true;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      i += 2;
      digita(self.usuario.email, -7000);
      // $('#txt:last-child').text(self.usuario.email);

    }

    self.enviaTelefone = function(){
      self.escondeFormTelefone = true;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      i += 2;
      digita(String(self.usuario.telefone), -7000);
    }












    var divHover = null,
      windowClick = false;

  $(function(){
    $(window).mousedown(function(){
      windowClick = true;
    });

    $(window).mouseup(function(){
      windowClick = false;
    });

    $('#avatar-eloisa').hover(function(){
      if(divHover === null){
        divHover = $(this);
      }
    }, function(){
      if(windowClick === false){
        divHover = null;
        $(this).css('z-index', '0');
      }
    });

    $(window).mousemove(function(e){
      if(windowClick === true && divHover != null){
        divHover.css({ top: e.clientY - divHover.height() / 2 + 'px', left: e.clientX - divHover.width() / 2 + 'px', position: 'absolute', zIndex: '1' });
      }
    });
  })



}]);
