(function(){
    var app = angular.module('collection', [ ]);

    app.controller('UserController', function($scope){
        $scope.user = user;
    });
    app.controller('CollectionController', function($filter){
        this.item = movie;
    });

    var user = {
        name: 'Dan Lucas',
        status: 'primary'
    };
    var movie = {
        name: "Marvel's The Avengers",
        gross: 1518.6,
        release: new Date('2012-05-04'),
        inCollection: true,
        shortDescription: 'Superheros destroy city while fighthing a Norse god and some aliens',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
})();
