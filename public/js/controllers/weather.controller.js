angular.module('mainApp').controller('weatherController', ['$scope', function ($scope) {

  var vm = this;

  var weatherApi = {
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1d39dca3c434d997a962b10eab6c0bfb/57.150999396, -2.10583291',
    headers:{
      'Access-Control-Allow-Origin': '*'
    }
  }

  $http(weatherApi).then(function(response){

    vm.weather = response.data.daily.summary;

  });

}]);
