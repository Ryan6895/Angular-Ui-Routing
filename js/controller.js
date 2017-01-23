angular.module('myApp')
.controller('storectrl', function($scope, productsService) {
  productsService.getProducts().then(function(products) {
    $scope.products = products;
  })
})
