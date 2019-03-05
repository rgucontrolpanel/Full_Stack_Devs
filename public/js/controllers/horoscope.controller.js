angular.module('mainApp').controller('horoscopeController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  var horoscopeApi = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/today/Libra',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(horoscopeApi).then(function(response){

    vm.sunsign = response.data.sunsign;
    vm.horoscope = response.data.horoscope;

  });

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
