app.controller("playerCntr", function ($scope, playerFactory) {
	$scope.findnow = function () {
		var Playername = $scope.playerName;
		var promise = playerFactory.callServer(Playername);
		for (var i = 1; i <= 10; i++) {
			console.log("The loop is Going on... " + i);
		}
		$scope.done = "loop is done";
		promise.then(function (data) {
			console.log(data.data);
			$scope.url = data.data.imageURL;
			$scope.country = data.data.country;
			$scope.fullName = data.data.fullName;
			$scope.born = data.data.born;
			$scope.currentAge = data.data.currentAge;
			$scope.playingRole = data.data.playingRole;
			$scope.battingStyle = data.data.battingStyle;
			$scope.bowlingStyle = data.data.bowlingStyle;
			$scope.twenty20 = data.data.data.batting.T20Is.Ave;
			$scope.sr = data.data.data.batting.T20Is.SR;
			$scope.run = data.data.data.batting.T20Is.Runs;
			$scope.hs = data.data.data.batting.T20Is.HS;
			$scope.Inns = data.data.data.batting.T20Is.Inns;
			$scope.Mat = data.data.data.batting.T20Is.Mat;
		}, function (error) {
			$scope.result = error;
		});
	}
})