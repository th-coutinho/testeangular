angular.module('ExameFrontEnd').controller('ReposController', function($scope, $http){
    
    let usuario = {
        nome: '',
        id: '',
        foto: '',
        following: '',
        followers: '',
        numeroDeRepositoriosPublicos: '', 
        repositorios: '',
        
        atribuiValores: (resultado)=>{
            usuario.nome = resultado.login;
            usuario.id = `id #${resultado.id}`;
            usuario.foto = resultado.avatar_url;
            usuario.following = resultado.following;
            usuario.followers = resultado.followers;
            usuario.numeroDeRepositoriosPublicos = resultado.public_repos;
        },

        informacoesDeRepositorios: function(resultado) {
            return resultado.map((element) =>{
                return element = {
                    nome: element.name,
                    descricao: element.description,
                    url: element.svn_url
                };        
                
            });            
        }
       
    };
    

    $scope.rodaAjax = () =>{
        
        $http.get(`https://api.github.com/users/${$scope.valorDaBusca}`) //Primeiro Ajax

        .success(function (resultado){

            usuario.atribuiValores(resultado); 
            
            $http.get(resultado.repos_url) //Segundo Ajax

                .success(function(resultado){
                    
                    $scope.mostrar = true;
                    
                    usuario.repositorios = usuario.informacoesDeRepositorios(resultado);          

                    if ("activeElement" in document)
                    document.activeElement.blur();
                })

                .error(function(error){
                    $scope.erro = true;
                    $scope.tipoDoErro = "Ocorreu um erro";
                });//Fim do Segundo Ajax
            
        })
        .error(function(error){
            $scope.erro = true;
            $scope.tipoDoErro = "Usuário não encontrado";
        }); //Fim do Primeiro Ajax

        $scope.usuario = usuario;
        $scope.valorDaBusca = '';
    }


    
    
});