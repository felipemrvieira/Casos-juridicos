angular.module('casosJuridicos').controller('ChatController', function($scope, $location){
  $scope.usuario = {
      nome : 'Felipe',
      url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
  };





  var mensagem = ["Olá, eu sou Eloisa! :)", -10,
  "Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar!",-70
  ];

  var i = 0;
  var templateMensagem = $('#hidden-template-mensagem').html();

  $(function() {
      $('#conversa').append(templateMensagem);
      digita(mensagem[i], -70);
  });

  function chamaDigita() {
      //INSERE O TEMPLATE DE MENSAGEM
      if (mensagem[i] == "nome"){
        exibeForm();
        setInterval(2000);
        alert('teste');
        return i;
      }
      $('#conversa').append(templateMensagem);
      //MANTEM O FOCO NA ULTIMA MENSAGEM
      $(document).scrollTop(1000);
      setInterval(200000);
      digita(mensagem[i], mensagem[i+1]);

  };

  function digita(mensagem, tempo){
      setInterval(2000);
      $("#txt:last-child").typed({
        strings: [mensagem],
        typeSpeed: tempo,

        callback: function() {chamaDigita()}
      });
      i += 2;

  };





});
