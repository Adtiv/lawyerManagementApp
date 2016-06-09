angular.module('starter.services', [])

.factory('Clients', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var clients = [{
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
      return clients;
    },
    remove: function(client) {
      clients.splice(clients.indexOf(client), 1);
    },
    get: function(clientId) {
      for (var i = 0; i < clients.length; i++) {
        if (clients[i].id === parseInt(clientId)) {
          return clients[i];
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
    { id: 0,title: 'Discovery Response', timeLeft: 22, rule:'DiscoveryResponse'},
    { id: 1,title: 'Pleading Response', timeLeft: 14, rule:'PleadingResponse'},
    { id: 2,title: 'Motion Response', timeLeft: 1, rule:'MotionResponse'},
    { id: 3,title: 'Mediation Statement', timeLeft: 2, rule:'MediationStatement'},
    { id: 4,title: 'Discovery Response', timeLeft: 3, rule:'DiscoveryResponse'},
    { id: 5,title: 'Pleading Response', timeLeft: 12, rule:'PleadingResponse'},
    { id: 6,title: 'Motion Response', timeLeft: 4, rule:'MotionResponse'},
    { id: 7,title: 'Mediation Statement', timeLeft: 7, rule:'MediationStatement'}
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
