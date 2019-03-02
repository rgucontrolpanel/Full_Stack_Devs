angular.module('mainApp').controller('cookbookController', ['$uibModalInstance', '$http', function ($uibModalInstance, $http) {

  var vm = this;

  vm.items1 = ['chicken', 'beef', 'onion'];
  vm.items2 = ['rice', 'cheese', 'tomato'];
  vm.items3 = ['broccoli', 'salad', 'egg'];

  vm.ing1 = 'beef';
  vm.ing2 = 'cheese';
  vm.ing3 = 'salad';

  vm.searchForRecipes = function(){
    var q = vm.ing1 + "+" + vm.ing2 + "+" + vm.ing3;

    var cookbookApi = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=' + q +
        '&app_id=a03a3ef9&app_key=c03ee47b2d0f9013e0c079f63ae9d963&to=12',
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
    }

    $http(cookbookApi).then(function(response){
      vm.recipes = response.data.hits;
      console.log(response.data.hits);
    });

  };

  vm.getIngredients = function(ingredients){

    var str = '';
    angular.forEach(ingredients, function(value, key){
      str += value.text + '; \n';
    });

    return str;

  };

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
