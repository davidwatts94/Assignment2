angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    var dataMine = Listings;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      
      $scope.listings.push({
        code: $scope.listingCode,
        name: $scope.listingName
      });
      
      $scope.listingCode = "";
      $scope.listingName = "";
    };

    $scope.deleteListing = function(index) {

      $scope.listings.splice(index,1);

    };

    $scope.showDetails = function(index) {

      $scope.curCode = $scope.listings[index].code;
      $scope.curBuilding = $scope.listings[index].name;
      $scope.curLat = $scope.listings[index].coordinates.latitude;
      $scope.curLong = $scope.listings[index].coordinates.longitude;
      $scope.curAddr = $scope.listings[index].address;
    
    };
  }
]);