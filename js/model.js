app.factory("playerFactory", function ($http, $q) {
    var object = {};
    var key = "i4Wwa9hkjNMvqrN1YtSI5zguiO03";
    object.callServer = function (Playername) {
        var defered = $q.defer();
        var url = "https://cricapi.com/api/playerStats?pid=" + Playername + "&&apikey=" + key;
        $http.get(url).then(success, fail);

        function success(data) {
            defered.resolve(data);
        }

        function fail(error) {
            defered.reject(error);
        }
        return defered.promise;
    }
    return object;
});