angular.module('casosJuridicos').controller('ChatController', function($scope, $location, $interval){
  $scope.usuario = {
      nome : 'Felipe',
      url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
  };





  var mensagem = ["Olá, eu sou Eloisa! :)", -5,
  "fim", 8,
  "Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar!",-70
  ];

  var i = 0;
  var templateMensagem = $('#hidden-template-mensagem').html();

  var enviaMsg = $interval(function(){
      validaMsg()
    }, 2000, 5);

    function digita(mensagem, tempo){
      $("#txt:last-child").typed({
        strings: [mensagem],
        typeSpeed: tempo
      });
    };

    function validaMsg(){
      if(mensagem[i]==="fim"){
        $interval.cancel(enviaMsg);
      }else{
        $('#conversa').append(templateMensagem);
        digita(mensagem[i], mensagem[i+1]);
        i += 2;
      }
    }

  //
  // $(function() {
  //   $interval(function(){
  //     $('#conversa').append(templateMensagem);
  //     digita(mensagem[i], -70);
  //   }, 1000, 1);
  //
  // });
  //
  // function chamaDigita() {
  //     //INSERE O TEMPLATE DE MENSAGEM
  //     if (mensagem[i] == "nome"){
  //       exibeForm();
  //       alert('teste');
  //       return i;
  //     }
  //     $interval(function(){
  //       $('#conversa').append(templateMensagem);
  //         digita(mensagem[i], mensagem[i+1]);
  //       }, 2000, 1);
  //     //MANTEM O FOCO NA ULTIMA MENSAGEM
  //     $(document).scrollTop(1000);
  //
  // };
  //
  // function digita(mensagem, tempo){
  //     $("#txt:last-child").typed({
  //       strings: [mensagem],
  //       typeSpeed: tempo,
  //
  //       callback: function() {chamaDigita()}
  //     });
  //     i += 2;
  //
  // };





});
