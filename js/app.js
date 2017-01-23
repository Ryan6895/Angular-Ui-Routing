angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1> you are on the home page</h1>'
    })
    .state('store', {
      url: '/store',
      controller: 'storectrl',
      templateUrl: 'views/store.html'
    })
    .state('detail', {
      url: 'products/:id',
      controller: 'detailCtrl',
      templateUrl: 'views/detail.html'
    })
});
