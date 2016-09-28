var app = angular.module( 'app', [] );

app.controller( 'shelf', [ '$scope', '$http', function( $scope, $http ) {

	console.log( 'ng' );

	$scope.items = [];

	$scope.getItems = function() {

		$http({
			method: 'GET',
			url: '/api/item'
		}).then( function( result ) {

			console.log( 'Result:', result );

			$scope.items = result.data;

		});

	};

	$scope.getItems();

} ]);