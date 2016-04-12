angular.module("Dado", []).controller("jogo", function($scope,$timeout,$interval){

var array = [];
$scope.inicia = function(){
  sorteio();
}

function sorteio(){
  QtdDados = document.getElementById("number").value;
  for (var i = 1; i <= QtdDados; i++) {
    var sorteio = Math.floor(Math.random()*6);
    $scope.soma +=sorteio;
    switch (sorteio) {
      case 1 :array[i] = "img/1.png";
      break;
      case 2 :array[i] = 'img/2.png';
      break;
      case 3 :array[i] = 'img/3.png';
      break;
      case 4 :array[i] = 'img/4.png';
      break;
      case 5 :array[i] = 'img/5.png';
      break;
    }
  }
  $scope.panel = array;
  }
});
