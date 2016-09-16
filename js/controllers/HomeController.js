app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;

	$scope.filter = 'title';
	
	$scope.getFilter = function() {
    	var filter = {};
    	filter[$scope.filter] = $scope.query;
    	return filter;
	};

	$scope.plusOne = function(id) {
		$scope.photo[id].likes += 1;
    };

    $scope.minusOne = function(id) {
		$scope.photo[id].dislikes += 1;
    };


  });
}]);
