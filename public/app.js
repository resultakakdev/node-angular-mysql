var myApp = angular.module('myApp', ['ui.router','ngMaterial','UserAPI','authService','ngStorage']);

myApp.run(function ($rootScope,Auth) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.authenticate
   /* console.log("requireLogin:",requireLogin);
    console.log("toState:",toState);
    console.log("event:",event);*/
   // console.log("Auth.isLoggedIn:",Auth.isLoggedIn);
    /*if (requireLogin && !Auth.isLoggedIn) {
      event.preventDefault();
      // get me a login modal!
    }*/
  });
});
myApp.config(function($stateProvider, $urlRouterProvider,$mdThemingProvider,$httpProvider) {
    
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

    $httpProvider.interceptors.push(function ($q, $location,$localStorage) {
        return {
           'request': function (config) {
            console.log("$localStorage.token:",$localStorage.token);
               config.headers = config.headers || {};
               if ($localStorage.token) {
                   config.headers.Authorization = 'Bearer ' + $localStorage.token;
                   //config.headers['x-session-token'] = $localStorage.token
               }
               return config;
           },
           
           'responseError': function(response) {
                console.log("response:",response);
                if (!$localStorage.token) {
                    $location.path('/login');
                }
                return $q.resolve(response);
            }
        };
    });   

    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            authenticate: true
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController',
            authenticate: false
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});