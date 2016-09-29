var lock = new Auth0Lock( 'srEiS0gXoYtvr8H4ORxvfSwJPPlwnlwa', 'codyogden.auth0.com' );
var app = angular.module( 'app', [] );

app.controller( 'shelf', [ '$scope', '$http', function( $scope, $http ) {

	console.log( 'ng' );

	$scope.items = [];

	$scope.userIsLoggedIn;

	$scope.init = function() {

		if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ) {
			$scope.userIsLoggedIn = true;
		} else {
			$scope.userIsLoggedIn = false;
		}

	};

	$scope.init();

	$scope.login = function() {

		lock.show( function (err, profile, token) {
			if (err) {
				console.error( 'auth error:', err );
			}else {
				localStorage.setItem('userToken', token);
				localStorage.setItem('userProfile', JSON.stringify(profile));
				location.reload();
			}
		});

	};

	$scope.getItems = function() {

		console.log( 'in getItems' );

		$http({
			method: 'GET',
			url: '/api/item'
		}).then( function( result ) {

			console.log( 'Result:', result );

			$scope.items = result.data;

		});

	};

	$scope.getItems();

	$scope.submitItem = function () {
		console.log( 'in submit' );

		var userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );


		$http({
			method:'POST',
			url: 'api/item',
			data: {
				description: $scope.description,
				user: userProfile.name,
				url: $scope.imageUrl
			}
		}).then(function(result){
			console.log( 'Result of post', result );
		})
		
	}

	$scope.logout = function() {

		$http({
			url: 'https://codyogden.auth0.com/v2/logout',
			method: 'GET'
		}).then( function( result ) {

			$scope.userIsLoggedIn = false;

			emptyLocalStorage();

		});

	};


} ]);

var emptyLocalStorage = function() {



	localStorage.removeItem( 'userProfile' );
	localStorage.removeItem( 'token' );

};