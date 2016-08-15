// Front end, to scroll to top:
// window.scrollTo(0,0)

var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    '1': {title: 'About Me',
          info: true,
          infoColor: {backgroundColor: '#E8ECF1'},
          // infoColor: {backgroundColor: '#E3DFC8'},
          // infoColor: {backgroundColor: '#DAF4F5'},
          infoTitle: 'about me',
          desc: ['/#/about']
          },

    '2': {title: 'Dungeon Explorer',    cover: 'project/cover-dung.png',
          img: ['dungeon1.png','dungeon2.png'],
          desc: ['Lorem Ipsum']
         },

    '3': {title: 'SquidLink',           cover: 'project/cover-squidl.png',
          img: ['squidlink1.png', 'squidlink2.png', 'squidlink3.png', 'squidlink4.png',],
          desc: ['Lorem Ipsum']
         },

    '4': {title: 'Game of Life',        cover: 'project/cover-life.png',
          img: ['gol1.png', 'gol2.png'],
          desc: ['Lorem Ipsum']
         },

    '5': {title: 'Homocides by Police', cover: 'project/cover-cops.png',
          img: ['homocide1.png','homocide2.png'],
          desc: ['Lorem Ipsum']
         },

    '6': {title: 'Contact Me',
          info: true,
          // infoColor: {backgroundColor: '#bcc5d6'},
          // infoColor: {backgroundColor: '#E8ECF1'},
          // infoColor: {backgroundColor: '#ABCECF'},
          infoColor: {backgroundColor: '#cdd7ea'},
          infoTitle: 'contact me',
          desc: ['Reno McKenzie','Reno@RenoMcKenzie.com', 'https://www.linkedin.com/in/renomckenzie','darkenvy.github.com']
          },

    '7': {title: 'Resumé',
          info: true,
          // infoColor: {backgroundColor: '#B5CFD8'},
          infoColor: {backgroundColor: '#F5F1DA'},
          // infoColor: {backgroundColor: '#C4DCE0'},
          infoTitle: 'resumé',
          desc: ['PDF: http://bit.ly/2aVc4jI', 'TXT: http://bit.ly/2aVc4jI']
          },


  }
})

app.controller('MainCtrl', ['$scope', 'projects', function($scope, projects) {
  $scope.projects = projects;
}])

app.controller('ProjectsCtrl', ['$scope', 'projects', '$stateParams',
  function($scope, projects, $stateParams) {
  $scope.project = projects[$stateParams.id];
}])

app.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.text = 'contact page'
}])

app.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.text = 'about page'
}])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('projects', {
      url: '/projects/:id',
      templateUrl: 'views/projects.html',
      controller: 'ProjectsCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })


}])
