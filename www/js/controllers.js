angular.module('starter.controllers', ['ui.rCalendar'])

.controller('TasksCtrl', function($scope, $state, Tasks) {
  $scope.tasks = Tasks.all();

  $scope.rules = "All Tasks";
  $scope.ruleSelect = "";
  $scope.filterRules = function(rules){
    if(rules=="DiscoveryResponse"){
      document.getElementById('unfilteredList').style.visibility="hidden"; 
      document.getElementById('unfilteredList').style.display="none"; 
      $scope.ruleSelect = "DiscoveryResponse";
      document.getElementById('filteredList').style.visibility="visible"; 
    }
    else if(rules=="PleadingResponse"){
      document.getElementById('unfilteredList').style.visibility="hidden"; 
      document.getElementById('unfilteredList').style.display="none"; 
      $scope.ruleSelect = "PleadingResponse";
      document.getElementById('filteredList').style.visibility="visible"; 
    }
    else if(rules=="MotionResponse"){
      document.getElementById('unfilteredList').style.visibility="hidden"; 
      document.getElementById('unfilteredList').style.display="none"; 
      $scope.ruleSelect = "MotionResponse";
      document.getElementById('filteredList').style.visibility="visible"; 
    }
    else if(rules=="MediationStatement"){
      document.getElementById('unfilteredList').style.visibility="hidden"; 
      document.getElementById('unfilteredList').style.display="none"; 
      $scope.ruleSelect = "MediationStatement";
      document.getElementById('filteredList').style.visibility="visible";   
    }
    else{
      $scope.ruleSelect = "";
      document.getElementById('unfilteredList').style.visibility="visible"; 
      document.getElementById('unfilteredList').style.display="initial"; 
      document.getElementById('filteredList').style.visibility="hidden"; 
    }
  };
  $scope.colorTasks = function(task){
    var taskTime = task.timeLeft;
    var time = parseInt(taskTime);
    if(time<=2){
      return "red";
    }  
    else if(time<=5){
      return "yellow";
    }
    else{
      return "green";
    }  
  }
  $scope.addTask = function(){
    var taskTitle = document.getElementById('taskTitle').value;
    var dueDate = parseInt(document.getElementById('dueDate').value);
    var taskDescription = document.getElementById('taskDescription').value;
    var size = $scope.tasks.length;
    $scope.tasks.push({id:size,title:taskTitle,timeLeft:dueDate,rule:'MediationStatement'});
    $state.transitionTo('tab.tasks', $state.$current.params, {reload: true});
    //$state.go('tab.tasks');
  }
  $scope.remove = function(task) {
    Tasks.remove(task);
  }

})
.controller('NewTaskCtrl', function($scope) {

})
.controller('ClientsCtrl', function($scope, Clients) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.clients = Clients.all();
  $scope.remove = function(client) {
    Clients.remove(client);
  };
  /*
  $scope.searchName = chat.name
  var expectFriendNames = function(chats, key) {
    element.all(by.repeater(name + ' in chats').column(name + '.name')).then(function(arr) {
      arr.forEach(function(wd, i) {
        expect(wd.getText()).toMatch(chats[i]);
      });
    });
  };
  */
})
.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})
.controller('ClientDetailCtrl', function($scope, $stateParams, Clients) {
  $scope.client = Clients.get($stateParams.clientId);
})
.controller('AccountCtrl', function ($scope) {
    'use strict';
    $scope.calendar = {};
    $scope.changeMode = function (mode) {
        $scope.calendar.mode = mode;
    };

    $scope.loadEvents = function () {
        $scope.calendar.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
        $scope.viewTitle = title;
    };

    $scope.today = function () {
        $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.calendar.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime) {
        console.log('Selected time: ' + selectedTime);
    };

    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
});
