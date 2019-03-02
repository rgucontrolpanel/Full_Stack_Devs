angular.module('mainApp').controller('marketStockController', ['$uibModalInstance', '$http', function ($uibModalInstance, $http) {

  var vm = this;

  vm.stockItems = [];

  var stockApi = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/ref-data/symbols?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(stockApi).then(function(response){

    // console.log(response);
    // angular.forEach(response.data, function(value, key){
    //
    //   var s = { id: key, symbol: value.symbol, name: value.name };
    //   detCtrl.stockItems.push(s);
    //
    // });

    for(var i = 0; i < 100; i++){

      var s = { id: i, symbol: response.data[i].symbol, name: response.data[i].name };
      vm.stockItems.push(s);

    }

  });

  vm.getCompanyDetails = function (symbol){

    console.log(symbol);
    var stockApi = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/stock/' + symbol + '/company/?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(stockApi).then(function(response){

      console.log(response);

    });
  }

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
