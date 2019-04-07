
(function () {
  'use strict';

  //Single Responsibility
  angular.module('AwareBudgetApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    //Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    //*** Set up UI states ***
    $stateProvider

    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'views/home.template.html'
    })

    //Setup Configuration
    .state('start', {
      url: '/start',
      templateUrl: 'views/budget.start.html',
      controller: 'BudgetCategoryListController as catList'
    })

    //Cnofigured Categories
    .state('history', {
      url: '/history',
      templateUrl: 'views/budget.history.html',
      controller: 'BudgetCategoryListController as catList'
    });

  }

})();
