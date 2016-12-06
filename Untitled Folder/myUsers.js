angular.module('inventory', []).controller('userCtrl', function($scope) {
$scope.supplyid = '';
$scope.desc = '';
$scope.orderno = '';
$scope.brand = '';
$scope.users = [
{id:1, supplyid:'1', desc:"bolok nga tambutso", orderno:"1000", brand:"CARyton" },
{id:2, supplyid:'2', desc:"bolok nga headlights", orderno:"1001", brand:"CARcar"  },
{id:3, supplyid:'3', desc:"busloton nga lingkoranan", orderno:"1002", brand:"Naa kay CAR?"  },
{id:4, supplyid:'4', desc:"flat nga ligid", orderno:"1003", brand:"FakeTaxi"  },
{id:5, supplyid:'5', desc:"pundir nga suga", orderno:"1004", brand:"shufaCAR"  },
{id:6, supplyid:'6', desc:"bangag nga winshield", orderno:"1005", brand:"Naa siyay CAR"  }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;
$scope.hideform = true;
$scope.editInventory = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.supplyid = '';
    $scope.desc = '';
    } else {
    $scope.edit = false;
    $scope.supplyid = $scope.users[id-1].supplyid;
    $scope.desc = $scope.users[id-1].desc;
	$scope.orderno = $scope.users[id-1].orderno;
	$scope.brand = $scope.users[id-1].brand;
  }
};

$scope.$watch('orderno',function() {$scope.test();});
$scope.$watch('brand',function() {$scope.test();});
$scope.$watch('supplyid', function() {$scope.test();});
$scope.$watch('desc', function() {$scope.test();});

$scope.test = function() {
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.supplyid.length ||
  !$scope.desc.length ||
  !$scope.orderno.length || !$scope.brand.length)) {
     $scope.incomplete = true;
  }
};

});