angular.module('diretivas', []).

directive('menuLateral', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.templateUrl = "js/directives/templates/menuLateral.html";

    return  ddo;   
})

.directive('quadroDeInformacoes', function() {
    
    var ddo = {};
    
        ddo.restrict = "AE";
    
        ddo.templateUrl = "js/directives/templates/quadroDeInformacoes.html";
    
        return  ddo;  
});;