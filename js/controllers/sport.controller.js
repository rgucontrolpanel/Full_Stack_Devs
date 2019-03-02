angular.module('mainApp').controller('sportController', ['$uibModalInstance', '$http', function ($uibModalInstance, $http) {

  var vm = this;

  var sportApi = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=8e39109d7670453ba4d8701a31267dd0',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(sportApi).then(function(response){

    vm.articles = response.data.articles;

  });

  vm.ok = function () {

      $uibModalInstance.close();

  };

  vm.cancel = function () {

      $uibModalInstance.dismiss('cancel');

  };

}]);

//8e39109d7670453ba4d8701a31267dd0 bbc api key - newsapi.org
