angular.module('casosJuridicos').controller('LandingController', function($scope, $sce, $location){
  $scope.usuario = {
      nome : 'Leão',
      url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
  };

  $scope.goChat = function (){
    $location.path( '/chat' );
};

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
      }
    });
  });

  // $(function(){
  //     $(".element").typed({
  //       strings: ["^900 E nós estamos prontos para te atender com os melhores do mercado!"],
  //       typeSpeed: 0
  //     });
  // });

//seta a altura da area
  $(function() {
      var height = $(window).height() ;
      var unitHeight = parseInt(height) + 'px';
      $('#sec-1').css('height',unitHeight);


  });





});
