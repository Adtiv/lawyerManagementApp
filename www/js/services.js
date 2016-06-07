angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Anthony Ditocco',
    email: 'aditocco@ufl.edu',
    phoneNumber: '9549183202'
  }, {
    id: 1,
    name: 'Jessi Ditocco',
    email: 'jditocco@ufl.edu',
    phoneNumber: '9545853938'
  }, {
    id: 2,
    name: 'Robyn Ditocco',
    email: 'rditocco@ditoccolaw.com',
    phoneNumber: '9546987688'
  }, {
    id: 3,
    name: 'Tony Ditocco',
    email: 'tditocco@ditoccolaw.com',
    phoneNumber: '9544222252'
  }];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  var tasks = [
    { title: 'Discovery Response', timeLeft: 22, rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: 14, rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: 1, rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: 2, rule:'MediationStatement'},
    { title: 'Discovery Response', timeLeft: 3, rule:'DiscoveryResponse'},
    { title: 'Pleading Response', timeLeft: 12, rule:'PleadingResponse'},
    { title: 'Motion Response', timeLeft: 4, rule:'MotionResponse'},
    { title: 'Mediation Statement', timeLeft: 7, rule:'MediationStatement'}
  ];
  return {
    all: function() {
      return tasks;
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
