angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newAntenna = {};
	$scope.antennas = {};
	$scope.selected = false;

	// Get all data from the database
	$http.get('/api/antenna').success(function(data) {
		$scope.antennas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Function to record an antenna
	$scope.registrarAntenna = function() {
		$http.post('/api/antenna', $scope.newAntenna)
		.success(function(data) {
				$scope.newAntenna = {}; // Delete data of the form
				$scope.antennas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Edit data of an antenna
	$scope.modificarAntenna = function(newAntenna) {
		$http.put('/api/antenna/' + $scope.newAntenna._id, $scope.newAntenna)
		.success(function(data) {
				$scope.newAntenna = {}; // Delete data of the form
				$scope.antennas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Function that erases an antenna object known as its id 
	$scope.borrarAntenna = function(newAntenna) {
		$http.delete('/api/antenna/' + $scope.newAntenna._id)
		.success(function(data) {
			$scope.newAntenna = {};
			$scope.antennas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Function to get the selected object in the table
	$scope.selectAntenna = function(antenna) {
		$scope.newAntenna = antenna;
		$scope.selected = true;
		console.log($scope.newAntenna, $scope.selected);
	};
}