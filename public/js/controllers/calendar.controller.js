angular.module('mainApp').controller('calendarController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item, uiCalendarConfig) {

  var vm = this;
  vm.item = item;

  vm.add = false;
  vm.namerequired = false;
  vm.startrequired = false;
  vm.endrequired = false;

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();

  var events = [
    { title: 'new event 1', start: new Date(year, month, day - 2) },
    { title: 'new test kurwa', start: new Date(year, month, day + 8) },
    { title: 'new event 2', start: new Date(year, month, day + 12) }
  ];

  vm.eventSources = [events];

  vm.uiConfig = {
    calendar: {
      editable: true,
      dayClick: function(){
        vm.addEvent();

        setTimeout(function(){
          $('#eventname').focus();
        }, 100);

      },
      eventClick: function(event){
        console.log(event);
      }
    }
  };

  vm.addEvent = function(){
    vm.add = !vm.add;
  };

  vm.dtoptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };


  vm.pop1 = { opened: false };
  vm.pop2 = { opened: false };

  vm.open1 = function(){
    vm.pop1.opened = true;
  };
  vm.open2 = function(){
    vm.pop2.opened = true;
  };

  vm.confirmEvent = function(){

    if(vm.eventname === null || vm.eventname === undefined)
      vm.namerequired = true;
    else if(vm.eventname !== null)
      vm.namerequired = false;
    else if(vm.eventstart === null || vm.eventstart === undefined)
      vm.startrequired = true;
    else if(vm.eventstart !== null)
      vm.eventstart = false;
    else if(vm.eventend === null || vm.eventend === undefined)
      vm.endrequired = true;
    else if(vm.eventend !== null)
      vm.endrequired = false;
    else{
      events.push({ title: vm.eventName, start: vm.eventstart, end: vm.eventend });
      vm.add = !vm.add;
    }

  };

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
