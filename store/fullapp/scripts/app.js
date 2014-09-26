(function(){
var app = angular.module('store', [ ]);

app.controller('UserController', function($scope){
    $scope.user = user;
});
app.controller('StoreController', function(){
    this.product = movie;
});

var user = {
    name: 'Dan Lucas',
    status: 'primary'
};
var movie = {
    name: "Avengers",
    price: 19.99,
    description: 'Superheros destroy city while fighthing a Norse god and his alien friends'
};
})();
