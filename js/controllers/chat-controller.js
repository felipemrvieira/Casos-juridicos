angular.module('casosJuridicos').controller('chatController', function($scope){

  $scope.mensagens = [
    {
      id: 1,
      textoMensagem: "Seja bem vindo!"
    },
    {
      id: 2,
      textoMensagem: "Meu nome é Eloisa."
    },
    {
      id: 3,
      textoMensagem: "Como vai?"
    }

  ];

});
