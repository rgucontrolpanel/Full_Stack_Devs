angular.module('mainApp').controller('detailsController', ['$uibModalInstance', 'item', '$http', function ($uibModalInstance, item, $http) {

  detCtrl = this;
  detCtrl.item = item;


  if(item === 'Weather'){

    var weatherApi = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1d39dca3c434d997a962b10eab6c0bfb/57.150999396, -2.10583291',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(weatherApi).then(function(response){

      detCtrl.weather = response.data.daily.summary;

    });

  }
  else if(item === 'Horoscope'){

    var horoscopeApi = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/today/Libra',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(horoscopeApi).then(function(response){

      detCtrl.sunsign = response.data.sunsign;
      detCtrl.horoscope = response.data.horoscope;

    });

  }
  else if(item === 'Sport'){

    //8e39109d7670453ba4d8701a31267dd0 bbc api key - newsapi.org
    var sportApi = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=8e39109d7670453ba4d8701a31267dd0',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(sportApi).then(function(response){

      detCtrl.articles = response.data.articles;

    });

  }
  else if(item === 'Cookbook'){

    detCtrl.items1 = ['chicken', 'beef', 'onion'];
    detCtrl.items2 = ['rice', 'cheese', 'tomato'];
    detCtrl.items3 = ['broccoli', 'salad', 'egg'];

    detCtrl.ing1 = 'beef';
    detCtrl.ing2 = 'cheese';
    detCtrl.ing3 = 'salad';

    detCtrl.searchForRecipes = function(){
      var q = detCtrl.ing1 + "+" + detCtrl.ing2 + "+" + detCtrl.ing3;

      var cookbookApi = {
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=' + q +
          '&app_id=a03a3ef9&app_key=c03ee47b2d0f9013e0c079f63ae9d963&to=12',
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      }

      $http(cookbookApi).then(function(response){
        detCtrl.recipes = response.data.hits;
        console.log(response.data.hits);
      });

    };

    detCtrl.getIngredients = function(ingredients){

      var str = '';
      angular.forEach(ingredients, function(value, key){
        str += value.text + '; \n';
      });

      return str;

    };

  }else if(item === 'Pig'){

    detCtrl.stockItems = [];

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
        detCtrl.stockItems.push(s);

      }

    });

    detCtrl.getCompanyDetails = function (symbol){
      
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

  }

  detCtrl.ok = function () {

      $uibModalInstance.close();

  };

  detCtrl.cancel = function () {

      $uibModalInstance.dismiss('cancel');

  };


}]);
