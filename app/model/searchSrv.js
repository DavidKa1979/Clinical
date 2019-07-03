app.factory("medicine", function($log, $http,$q) {

    function Medicine(mname, mename) {
        if (arguments.length > 1) {

            this.mname = mname;
            this.mename = mename;
        }
    }

function getMedicine() {
    var async = $q.defer();

    var medicine = [];

    $http.get("app/model/data/medicines.json").then(function(res) {
      // on success
      for (var i = 0; i < res.data.length; i++) {
        var medicine = new Car(res.data[i]);
        medicines.push(car);
      }
      // cars are ready - I can resolve the promise
      async.resolve(medicines);
    }, function(err) {
      $log.error(err);
      async.reject(err);
    });

    return async.promise;
  }
});