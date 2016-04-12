angular.module("Dado", []).controller("jogo", function($scope,$timeout,$interval){
$scope.inicia = function(){
    var sorteio = Math.floor(Math.random()*6);
    console.log(sorteio);
    switch (sorteio) {
      case 1 :document.getElementById("imgDado").src = 'img/1.png';
      break;
      case 2 :document.getElementById("imgDado").src = 'img/2.png';
      break;
      case 3 :document.getElementById("imgDado").src = 'img/3.png';
      break;
      case 4 :document.getElementById("imgDado").src = 'img/4.png';
      break;
      case 5 :document.getElementById("imgDado").src = 'img/5.png';
      break;
    }
}
});
