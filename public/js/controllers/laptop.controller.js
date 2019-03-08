angular.module('mainApp').controller('laptopController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item) {

  var vm = this;
  vm.item = item;

  vm.mood = '';

  vm.contacts = [
    { name: 'Alessandro Del Piero', value: 'alessandro' },
    { name: 'Iga Ninja', value: 'iga' },
    { name: 'Justeen Grindewald', value: 'justeen' },
    { name: 'Michelangelo', value: 'michel' },
    { name: 'Thomas Aquinas', value: 'aquinas' },
    { name: 'Enzo Ferrari', value: 'ferrari' }
  ];

  vm.moods = [
    { id: '0', mood: 'Happy'},
    { id: '1', mood: 'Busy'},
    { id: '2', mood: 'Excited'},
    { id: '3', mood: 'Sad'},
    { id: '4', mood: 'Sleepy'}
  ];

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
