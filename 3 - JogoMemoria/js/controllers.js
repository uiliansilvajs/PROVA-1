angular.module("Memoria", []).controller("jogo", function($scope,$timeout,$interval){
var MAX = 6;
var arrayAvesso = [];
var array = [];
for (var i = 0; i < MAX; i++) {
  arrayAvesso[i] = "img/15.jpg";
}
$scope.panel = arrayAvesso;
$scope.iniciarJogo = function(){
  arrayLevelOne();
}

//Level 1
function arrayLevelOne(){
  var arrayLevelOne = ["img/0.png","img/0.png","img/1.png","img/1.png","img/2.png","img/2.png"];
  array = arrayLevelOne;
  embaralhar(array);
  iniciarJogo(array);
  tempoJogo();
}
//*Level 1

//Level 2
//*Level 2

//Level 3
//*Level 3




var count = 0;
var intervalo;

function iniciarJogo(array){
      trocaImg(array);
      fecharImg();
}
function trocaImg(array){
  $scope.panel = array;
}

function fecharImg(){
  $timeout(function() {
          $scope.panel = arrayAvesso;
  }, 5000);
}

function tempoJogo() {
    $scope.counter = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        meuTempo = $timeout($scope.onTimeout,1000);
    }
    var meuTempo = $timeout($scope.onTimeout,1000);
}

  function embaralhar(array){
    var m = array.length,T,I;
    while (m) {
      I = Math.floor(Math.random()*m--);
      T = array[m];
      array[m] = array[I];
      array[I] = T;
    }
    return array;
  }

  $scope.jogar = function(imgSelect,$index){
    console.log(imgSelect);
    document.getElementById("imgSelect").src = array[$index];
  }
});




/*  var array = ["img/0.png","img/0.png","img/1.png","img/1.png","img/2.png","img/2.png",
                 "img/3.png","img/3.png","img/4.png","img/4.png","img/5.png","img/5.png",
                 "img/6.jpg","img/6.jpg","img/7.jpg","img/7.jpg"];*/
