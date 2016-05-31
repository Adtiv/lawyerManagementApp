angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Discovery Response', timeLeft: '2 Days', rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: '4 Days', rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: '10 Days', rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: '15 Days', rule:'MediationStatement'},
    { title: 'Discovery Response', timeLeft: '16 Days', rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: '19 Days', rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: '21 Days', rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: '23 Days', rule:'MediationStatement'}
  ];
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
      document.getElementById('unfilteredList').style.visibility="visible"; 
      document.getElementById('unfilteredList').style.display="initial"; 
      document.getElementById('filteredList').style.visibility="hidden"; 
    }
  };

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
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
