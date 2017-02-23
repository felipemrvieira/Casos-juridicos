angular.module('casosJuridicos').controller('ChatController', function($scope, $location, $interval){
  $scope.usuario = {
      nome : 'Felipe',
      url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
  };

  $scope.escondeForm = true;



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


  var enviaMsg = $interval(function(){
      validaMsg();
      time = 5000;
    }, time, 5);

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
        $scope.escondeForm = false;
        $interval.cancel(enviaMsg);
      }else{
        $('#conversa').append(templateMensagem);
        digita(mensagem[i], mensagem[i+1]);
        i += 2;
      }
    }

    $scope.enviaNome = function(){
      console.log("enviando " + $scope.usuario.nome);
      $scope.escondeForm = true;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente').text($scope.usuario.nome.substring(0, 1));
      $("#txt:last-child").text("Me chamo " + $scope.usuario.nome);

    }

    primeiraLetra = function(){
      $scope.usuario.letra = $scope.usuario.nome.substring(0, 1);
      return $scope.usuario.letra
    }

});
