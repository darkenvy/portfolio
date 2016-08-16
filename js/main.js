// Front end, to scroll to top:
// window.scrollTo(0,0)
console.log('v2.3');

var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    '1': {title: 'About Me',
          info: true,
          infoColor: {backgroundColor: '#E8ECF1'},
          infoTitle: 'about me',
          desc: []
          },

    '2': {title: 'Dungeon Explorer',    cover: 'project/cover-dung.png',
          github: 'https://github.com/darkenvy/Tactile-VR-Doom-Demo',
          img: ['dungeon1.png','dungeon2.png'],
          desc: ['A quick, roguelike game where the main objective is to stay alive and delve as deep into the depths as possible.'],
          links: [['Play Now', 'http://renomckenzie.com/DungeonTreasure/']]
         },

    '3': {title: 'Tactile VR Doom', cover: 'project/cover-vr-doom.png',
          github: 'https://github.com/darkenvy/Tactile-VR-Doom-Demo',
          img: ['vr-doom1.png','vr-doom2.png'],
          desc: ['Tactile VR Doom is a tech demo that illustrates the possibilities of using physical objects to control the VR world by utilizing the camera'],
          links: [
            ['Live Demo','https://renomckenzie.com/vr-doom/'],
            ['Setup Instructions', 'https://github.com/darkenvy/Tactile-VR-Doom-Demo']
            ]
         },

    '4': {title: 'Game of Life',        cover: 'project/cover-life.png',
          github: 'https://github.com/darkenvy/GameOfLife',
          img: ['gol1.png', 'gol2.png'],
          desc: ['An exploration into efficiency and game logic. With simple 4 rules, complexity can arise.'],
          links: [['Play Now','http://renomckenzie.com/gol']]
         },

    '5': {title: 'SquidLink',           cover: 'project/cover-squidl.png',
          github: 'https://github.com/darkenvy/Squidl.ink',
          img: ['squidlink1.png', 'squidlink2.png', 'squidlink3.png', 'squidlink4.png',],
          desc: ['A tool for helping to get files from A to B. All without the need for additional software or hardware. Squidlink utilizes Webtorrent as it\'s core but is geared towards ease of use.'],
          links: [['Live Site', 'http://squidl.ink/']]
         },

    '6': {title: 'Contact Me',
          info: true,
          infoColor: {backgroundColor: '#cdd7ea'},
          infoTitle: 'contact me',
          desc: ['Reno McKenzie'],
          links: [
            ['email', 'mailto:Reno@RenoMcKenzie.com'],
            ['linkedin', 'https://www.linkedin.com/in/renomckenzie'],
            ['github','http://darkenvy.github.com']
            ]
          },

    '7': {title: 'Yammerings on Twitter', cover: 'project/cover-yammerings.png',
          github: 'https://github.com/darkenvy/Yammerings',
          img: ['yammerings1.png','yammerings2.png'],
          desc: ['By analyzing conversations on Twitter, we can provide client with realtime, up-to-date numbers trends, statistics and emotion bearing results.'],
          links: [['Live Site','https://yammerings.herokuapp.com']]
         },

    '8': {title: 'Resumé',
          info: true,
          infoColor: {backgroundColor: '#F5F1DA'},
          infoTitle: 'resumé',
          desc: []
          },
    '9': {title: 'Portfolio Site', cover: 'project/cover-portfolio.png',
          github: 'https://github.com/darkenvy/darkenvy.github.io',
          desc: ['This site is created using Angular, Angular Factories, CSS Animations, Google Fonts, and a splash of creativity.'],
          links: [
            ['github','https://github.com/darkenvy/darkenvy.github.io']
            ]
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
      templateUrl: 'views/aboutme.html',
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
