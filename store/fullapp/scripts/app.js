(function(){
    var app = angular.module('collection', [ ]);

    app.controller('UserController', function($scope){
        $scope.user = user;
    });
    app.controller('CollectionController', function($filter){
        this.items = movies;
    });

    var user = {
        name: 'Dan Lucas',
        status: 'primary'
    };
    var movies = [
        {
            name: "Marvel's The Avengers",
            gross: 1518.6,
            release: new Date('2012-05-04'),
            inCollection: true,
            shortDescription: 'Superheros destroy city while fighthing a Norse god and some aliens'
        },
        {
            name: "Ironman",
            gross: 318.4,
            release: new Date('2008-02-05'),
            inCollection: false,
            shortDescription: 'Billionaire genius invents portable fusion reactor, uses it to build flying suit'
        }
    ];

    app.filter('capitalize', function(){
        return function (input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        };
    });
})();
