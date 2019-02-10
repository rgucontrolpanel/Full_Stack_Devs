angular.module('mainApp').controller('detailsController', ['$uibModalInstance', 'item', '$http', function ($uibModalInstance, item, $http) {

  detCtrl = this;
  detCtrl.item = item;

  var req = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1d39dca3c434d997a962b10eab6c0bfb/57.150999396, -2.10583291',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(req).then(function(response){

    detCtrl.weather = response.data.daily.summary;
    
  });

  detCtrl.ok = function () {

      $uibModalInstance.close();

  };

  detCtrl.cancel = function () {

      $uibModalInstance.dismiss('cancel');

  };


}]);
