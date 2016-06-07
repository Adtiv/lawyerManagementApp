angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, $state, Tasks) {
  $scope.tasks = Tasks.all();
  /*
  $scope.tasks = [
    { title: 'Discovery Response', timeLeft: '2', rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: '4', rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: '10', rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: '15', rule:'MediationStatement'},
    { title: 'Discovery Response', timeLeft: '16', rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: '19', rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: '21', rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: '23', rule:'MediationStatement'}
  ];
  */
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
    $scope.tasks.push({title:taskTitle,timeLeft:dueDate,rule:'MediationStatement'});
    $state.transitionTo('tab.tasks', $state.$current.params, {reload: true});
    //$state.go('tab.tasks');
  }
  $scope.remove = function(task) {
    Tasks.remove(task);
  }
  // Create and load the Modal
  /*
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
  */
})
.controller('NewTaskCtrl', function($scope) {

})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
