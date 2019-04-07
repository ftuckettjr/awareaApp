
(function () {
  'use strict';

  //Single Responsibility
  angular.module('AwareBudgetApp', ['ui.router']);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['AwareBudgetApp'], {strictDi: true});
  });

})();
