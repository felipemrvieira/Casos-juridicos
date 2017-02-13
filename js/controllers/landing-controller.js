angular.module('casosJuridicos').controller('LandingController', function($scope, $sce){
  $scope.usuario = {
      nome : 'Leão',
      url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
  };
  $scope.sources = [
  	{src: $sce.trustAsResourceUrl("video/Diagonal.mp4"), type: "video/mp4"},
  	{src: $sce.trustAsResourceUrl("video/Diagonal.webm"), type: "video/webm"}
  ];

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

  $(function(){
      $(".element").typed({
        strings: ["^900 E nós estamos prontos para te atender com os melhores do mercado!"],
        typeSpeed: 0
      });
  });

//seta o tamanho da area do video
  $(function() {
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height',unitHeight);
      $('#sec-1').css('height',unitHeight);


  });





});
