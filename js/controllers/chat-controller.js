angular.module('casosJuridicos').controller('ChatController', ['$location' ,'$interval', '$window', '$http',
function($location, $interval, $window, $http){

  var self = this;

  self.usuario = {
      nome : '',
      letra : '',
      tipo : '',
      descricao : '',
      email: '',
      telefone: '',
      cidade : ''
  };

  self.escondeForm = true;
  self.escondeFormTipo = true;
  self.escondeFormCidade = true;
  self.escondeFormDescricao = true;
  self.escondeFormEmail = true;
  self.escondeFormTelefone = true;
  self.escondeFormVoltar = true;
  self.escondeCidade = true;
  self.escondeBotaoCidade = true;

  self.codigoEstado = '';

  self.estados = new Array();
  self.cidades = new Array();


  var mensagem = ["Olá, eu sou Eloisa! :)", -70,
  "Sei que o que te trouxe aqui não deve ser um assunto tão agradável, mas não se preocupe eu estou aqui para te ajudar! ",-90,
  "Antes de começarmos, como posso te chamar?",-50,
    "formNome",-70,

   "Qual a cidade e estado que você mora?",-70,
    "formCidade", -70,
   "Para selecionarmos o melhor profissional para o seu caso, selecione a área do Direito que mais se aproxima com o seu caso.",-70,
     "formTipo",-70,
  "Certo, entendi.",-70,
  "Agora preciso que conte rapidamente  o seu caso jurídico.",-70,
    "formDescricao",-70,
  "Bem delicado, mas iremos te ajudar.",-70,
  "Para que você seja contactado por um advogado, precisamos do seu email. ",-70,
    "formEmail",-70,
  "E o telefone com DDD?",-70,
    "formTelefone",-70,
  "Certo, anotei tudinho aqui!",-70,
  "Irei analisar seu caso com calma e te encaminhar para o melhor advogado disponível.",-70,
  "Enquanto isso, verifique seu email, enviaremos algumas informações para confirmação.",-70,
  "Abraços e boa sorte!", -70,
      "formVoltar",-70,

  "fim", 8,
  ];

  var i = 0
  var time = 1500;
  var templateMensagem = $('#hidden-template-mensagem').html();
  var templateResposta = $('#hidden-template-resposta').html();
  var templateForm = $('#hidden-template-form').html();

  $(function(){
    $interval(function(){
      $("#intro").addClass("fadeOutUpBig");
      $("#avatar-eloisa").removeClass("hide");
      $("#avatar-eloisa").addClass("bounceInUp");
      enviaMsg();
    }, 5000, 1);
  });

    var enviaMsg = function(){
      $interval(function(){
        validaMsg();
        time = 1200;
      }, time, 1);
    }

    function validaMsg(){
      switch (mensagem[i]) {
        case "fim":
          $interval.cancel(enviaMsg);
          $(document).scrollTop(1000);
          break;
        case "formNome":
          self.escondeForm = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        case "formTipo":
          $interval(function(){
            $(document).scrollTop(10000);
            self.escondeFormTipo = false;
          }, 3000, 1);
          break;
        case "formDescricao":
          self.escondeFormDescricao = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        case "formCidade":
          $http.get('http://www.geonames.org/childrenJSON?geonameId=3469034')
          .then(successCallback, errorCallback);
          function successCallback(response){
            var s = angular.fromJson(response);
            estadosObj = s.data.geonames;

            for(var i = 0; i < estadosObj.length; i++) {
              var estado= new Object();
              estado.nome = estadosObj[i]['adminName1'];
              estado.codigo = estadosObj[i]['geonameId'];
              self.estados.push(estado);
            }
            return;
          }
          function errorCallback(error){
            console.log(error);
            return error;
          }
          self.escondeFormCidade = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        case "formEmail":
          self.escondeFormEmail = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        case "formTelefone":
          self.escondeFormTelefone = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        case "formVoltar":
          self.escondeFormVoltar = false;
          $interval.cancel(enviaMsg);
          $(document).scrollTop(10000);
          break;
        default:
          $('#conversa').append(templateMensagem);
          $('.mensagem-container:last-child').find("#txt").text(mensagem[i]);
          $interval(function(){
            $('.mensagem-container:last-child').find(".typing").addClass("ng-hide");
            $('.mensagem-container:last-child').find("#mensagem").removeClass("ng-hide");
            enviaMsg();
          }, 1000, 1);
          i += 2;
          $(document).scrollTop(10000);

      }
    }

    self.enviaNome = function(){
      self.escondeForm = true;
      self.usuario.letra = self.usuario.nome.substring(0,1).toUpperCase();
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
        $('.mensagem-container:last-child').find("#txt").text("Me chamo " + self.usuario.nome);
      $interval(function(){
        $('#conversa').append(templateMensagem);
        $('.mensagem-container:last-child').find("#txt").text("Prazer, " + self.usuario.nome+"!");
        $('.mensagem-container:last-child').find(".typing").addClass("ng-hide");
        $('.mensagem-container:last-child').find("#mensagem").removeClass("ng-hide");
        enviaMsg();
      }, 2000, 1);
    }

    self.selTipo = function(){
      self.escondeFormTipo = true;
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      $('.mensagem-container:last-child').find("#txt").text("Estou com problema relacionado a área: " + self.usuario.tipo);
      enviaMsg();

    }

    self.enviaDescricao = function(){
      self.escondeFormDescricao = true;
      i += 2;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      $('.mensagem-container:last-child').find("#txt").text(self.usuario.descricao);
      enviaMsg();

    }

    self.selecionaEstado = function(){
      self.escondeCidade = false;
      self.cidades = [];

      $http.get('http://www.geonames.org/childrenJSON?geonameId='+self.codigoEstado.codigo)
      .then(successCallback, errorCallback);
      function successCallback(response){
        var s = angular.fromJson(response);
        cidadesObj = s.data.geonames;

        for(var i = 0; i < cidadesObj.length; i++) {
          var cidade = new Object();
          cidade.nome = cidadesObj[i]['name'];
          cidade.codigo = cidadesObj[i]['geonameId'];
          self.cidades.push(cidade);
        }
        return;
      }
      function errorCallback(error){
        console.log(error);
        return error;
      }
    }

    self.selecionaCidade = function(){
      self.usuario.cidade = self.cidade.nome;
      console.log(self.usuario.cidade);
      self.escondeBotaoCidade = false;

    }

    self.selCidade = function(){
      i += 2;
      self.escondeFormCidade = true;
      enviaMsg();

    }

    self.enviaEmail = function(){

      $http.get('https://apilayer.net/api/check?access_key=82b26925292bbe8799720f003d776520&email='+self.usuario.email+'&smtp=1&format=1')
      .then(successCallback, errorCallback);
      function successCallback(response){
        var t = angular.fromJson(response);
        if (t.data.smtp_check === true) {
          self.escondeFormEmail = true;
          $('#conversa').append(templateResposta);
          $('#avatar-cliente:last-child').text(self.usuario.letra);
          i += 2;
          $('.mensagem-container:last-child').find("#txt").text(self.usuario.email);
          $(document).scrollTop(10000);
          enviaMsg();
        } else {
            $('#conversa').append(templateMensagem);
            $('.mensagem-container:last-child').find("#txt").text("Desculpe, não consideramos " + self.usuario.email +" um email válido!");
            $(document).scrollTop(10000);
            $interval(function(){
              $('.mensagem-container:last-child').find(".typing").addClass("ng-hide");
              $('.mensagem-container:last-child').find("#mensagem").removeClass("ng-hide");
              if (t.data.did_you_mean) {
                $('#conversa').append(templateMensagem);
                $('.mensagem-container:last-child').find("#txt").text("Você quis dizer " + t.data.did_you_mean +"?");
                $interval(function(){
                  $('.mensagem-container:last-child').find(".typing").addClass("ng-hide");
                  $('.mensagem-container:last-child').find("#mensagem").removeClass("ng-hide");
                  $(document).scrollTop(10000);
                }, 1500, 1);
              }
            }, 1000, 1);

        }



      }
      function errorCallback(error){
        console.log(error);
        return error;
      }



    }

    self.enviaTelefone = function(){
      self.escondeFormTelefone = true;
      $('#conversa').append(templateResposta);
      $('#avatar-cliente:last-child').text(self.usuario.letra);
      i += 2;
      $('.mensagem-container:last-child').find("#txt").text(String(self.usuario.telefone));
      enviaMsg();
    }

    self.voltar = function (){
      $location.path( '/' );
    };








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
