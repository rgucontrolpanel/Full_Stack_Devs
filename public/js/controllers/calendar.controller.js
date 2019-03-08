angular.module('mainApp').controller('calendarController', ['$uibModalInstance', '$http', 'item', function ($uibModalInstance, $http, item, uiCalendarConfig) {

  var vm = this;
  vm.item = item;

  vm.add = false;

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();


  vm.menuOptions = [
    { text: 'text', click: function(){}},
    { text: 'text2', click: function(){}}
  ];

  var events = [
    { title: 'test test test', start: new Date(year, month, day - 2) },
    { title: 'event test', start: new Date(year, month, day + 8), end: new Date(year, month, day + 11) },
    { title: 'test event event test', start: new Date(year, month, day + 12) }
  ];

  vm.eventSources = [events];

  vm.uiConfig = {
    calendar: {
      editable: true,
      selectable: true,
      dayClick: function(event){

        vm.eventstart = new Date(event);
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

    if(vm.add === false)
      vm.add = !vm.add;

  };

  vm.cancelEvent = function(){
    vm.add = !vm.add;
    vm.eventname = '';
    vm.eventstart = '';
    vm.eventend = '';
  }

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

    events.push({ title: vm.eventname, start: vm.eventstart, end: vm.eventend });
    vm.add = false;

  };

  vm.ok = function () {
      $uibModalInstance.close();
  };

  vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };

}]);
