app.factory('photos', ['$http', function($http) {
  return $http.get('js/services/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });

}]);
