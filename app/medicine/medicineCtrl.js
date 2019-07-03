app.controller("medicineCtrl", function($scope, $http){

  //**** Business Logic - this will eventually move to service ****
function Medicine(mname, mename, sactive, mimg, moreinfo) {
this.mname = mname;
this.mename = mename;
this.sactive = sactive;
this.mimg = (mimg);
this.moreinfo = moreinfo;
};

Medicine.prototype.fulmename = function() {
var fulmename = this.mname + " " + this.mename;
return fulmename;
};

// Load 6 medicine
$scope.medicines = [];
$http.get("app/model/data/medicine.json").then(function(res) {
// on success
for (var i = 0; i < res.data.length; i++) {
  var medicine = new Medicine(res.data[i].mname, res.data[i].mename, 
    res.data[i].sactive, res.data[i].mimg, res.data[i].moreinfo);
  $scope.medicines.push(medicine);
}
}, function(err) {
console.error(err);
})  

console.log($scope.medicines);


/**** Presentation Logic ****/
$scope.addMedicine = function() {
var medicine = new Medicine("Chris", "Hemsworth", "https://m.media-amazon.com/sactives/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", "1983-08-11", "https://www.moreinfo.com/name/nm1165110/");
$scope.medicines.push(medicine);
}

$scope.searchMedicine = "";
$scope.filterMed = function(medicine) {
// If the user didn't insert a filter string then show this medicine
// if (!$scope.query) {
//   return true;
// } else 
  // Reaching here means that the user entered a filter text
  if (medicine.mname.toLowerCase().includes($scope.searchMedicine.toLowerCase()) || 
  medicine.mename.toLowerCase().includes($scope.searchMedicine.toLowerCase())) {
return true;
} else {
return false;
}
  // if the filter string exists in the actor first name or last name
  // then return true otherwise return false

}

// $scope.orderProp = "";
// $scope.orderReverse = false;
// $scope.orderByProp = function(propName) {

//   if ($scope.orderProp !== propName) {
//     // Clicking on this column for the first time
//     // I want an ascending order so putting false in reverse
//     $scope.orderProp = propName;
//     $scope.orderReverse = false;
//   } else {
//     // Clicking on the same columns - reversing the order
//     $scope.orderReverse = !$scope.orderReverse;
//   }


// }
$scope.activeCard=null;
$scope.clickCard = function(medicine) {
if ($scope.activeCard === medicine) {
  $scope.activeCard=null;
} else {
$scope.activeCard = medicine
}
}


});