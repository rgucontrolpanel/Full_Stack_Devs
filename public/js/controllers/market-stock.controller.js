angular.module('mainApp').controller('marketStockController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.stockItems = [];


  vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
  vm.series = ['Series A', 'Series B'];
  vm.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
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
      url: 'https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com/beta/stock/' + symbol + '/chart/1y/?token=sk_c131aad5c80d4c77bcdfb71dea77cf3a',
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
