
(function () {
  'use strict';

  //Single Responsibility
  angular.module('AwareBudgetApp')
  .service('BudgetDataService', BudgetDataService);

  BudgetDataService.$inject = [];
  function BudgetDataService() {
    /* jshint validthis: true */
    var service = this;

    //private
    var category = { 
      all: [{name: "Travel"}, {name: "Dining"}, {name: "Shopping"}, {name: "Cars"}, {name: "Shoes"}, { name: "Gym"}
              , {name: "Sports"}, { name: "Gambling"}, { name: "Games"}, { name: "Entertainment"}, { name: "Phone"}]
      , configured: []
    };

    //console.log(category);

    service.getAllCategories = getAllCategories;
    service.getConfiguredCategories = getConfiguredCategories;

    service.swap = swap;
    service.restore = restore;

    ////////////

    function getAllCategories() {
      /*  */
      return category.all;
    }

    function getConfiguredCategories() {
      /*  */
      return category.configured;
    }

    function swap(listIndex) {
      /* */
      var swapping = category.all[listIndex];

      //reference
      category.all.splice(listIndex, 1);

      category.configured.push(swapping);
    }

    function restore(listIndex) {
      /* */
      var swapping = category.configured[listIndex];

      //reference
      category.configured.splice(listIndex, 1);

      category.all.push(swapping);
    }

  }

})();
