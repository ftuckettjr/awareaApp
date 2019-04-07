
(function () {
  'use strict';

  angular.module('AwareBudgetApp')
  .controller('BudgetCategoryListController', BudgetCategoryListController);

  BudgetCategoryListController.$inject = ['BudgetDataService'];
  function BudgetCategoryListController(BudgetDataService) {
    /* jshint validthis: true */
    var mainList = this;

    mainList.setupCategory = BudgetDataService.getAllCategories();
    mainList.configuredCategory = BudgetDataService.getConfiguredCategories();

    mainList.swap = swap;
    mainList.restore = restore;

    function swap(listIndex) {
      BudgetDataService.swap(listIndex);
    }

    function restore(listIndex) {
      BudgetDataService.restore(listIndex);
    }
  }

})();
