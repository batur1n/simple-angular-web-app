app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
 });
  
	$scope.plusOne = function(id) {
		$scope.detail[id].likes += 1;
  };
  $scope.minusOne = function(id) {
		$scope.detail[id].dislikes += 1;
  };

}]);
