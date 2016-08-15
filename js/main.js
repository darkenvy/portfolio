// Front end, to scroll to top:
// window.scrollTo(0,0)
console.log('v2.3');

var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    '1': {title: 'About Me',
          info: true,
          infoColor: {backgroundColor: '#E8ECF1'},
          // infoColor: {backgroundColor: '#E3DFC8'},
          // infoColor: {backgroundColor: '#DAF4F5'},
          infoTitle: 'about me',
          desc: []
          },

    '2': {title: 'Dungeon Explorer',    cover: 'project/cover-dung.png',
          img: ['dungeon1.png','dungeon2.png'],
          desc: ['A quick, roguelike game where the main objective is to stay alive and delve as deep into the depths as possible.']
         },

    '3': {title: 'SquidLink',           cover: 'project/cover-squidl.png',
          img: ['squidlink1.png', 'squidlink2.png', 'squidlink3.png', 'squidlink4.png',],
          desc: ['A tool for helping to get files from A to B. All without the need for additional software or hardware. Squidlink utilizes Webtorrent as it\'s core but is geared towards ease of use.']
         },

    '4': {title: 'Game of Life',        cover: 'project/cover-life.png',
          img: ['gol1.png', 'gol2.png'],
          desc: ['An exploration into efficiency and game logic. With simple 4 rules, complexity can arise.']
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
          desc: []
          },


  }
})

app.controller('MainCtrl', ['$scope', 'projects', '$location', '$anchorScroll', function($scope, projects, $location, $anchorScroll) {
  $scope.projects = projects;

  // $scope.$on('$routeChangeSuccess', function() {
  //   console.log('changed');
  // })
  $scope.gotoTop = function() {
    $anchorScroll();
  }
  $scope.flip = function(project) {
    // If clicked on About Me, then change view. If not, then toggle flip
    if (project.title == 'About Me' || project.title == 'Resumé') {
      $location.path('/about');
      $anchorScroll()
    } else {
      project._flipped = !project._flipped;
    }
  }
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
    //   // controller: 'MainCtrl'
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
