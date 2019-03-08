angular.module('mainApp').controller('marketStockController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.stockItems = [];

  vm.series = ['Open', 'Close'];

  vm.onClick = function (points, evt) {
    console.log(points, evt);
  };

  vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  vm.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

  var stockApi = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/ref-data/symbols?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(stockApi).then(function(response){

    for(var i = 0; i < 100; i++){

      var s = { id: i, symbol: response.data[i].symbol, name: response.data[i].name };
      vm.stockItems.push(s);

    }

  });

  vm.getCompanyDetails = function (symbol){

    var stockHistory = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/stock/' + symbol + '/chart/1y/?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(stockHistory).then(function(response){

      vm.close = [], vm.open = [], vm.data = [], vm.labels = [];

      for(var i = 0; i < response.data.length; i++){

        vm.open.push(response.data[i].open);
        vm.close.push(response.data[i].close);
        vm.labels.push(response.data[i].date);

      }

      vm.data.push(vm.open);
      vm.data.push(vm.close);

    });

    var company = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/stock/' + symbol + '/company/?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(company).then(function(response){

      vm.details = response.data;

    });

  }

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
