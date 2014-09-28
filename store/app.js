(function(){
    var app = angular.module('collection', [ ]);
    app.controller('UserController', function($scope){
        $scope.user = user;
    });

    app.controller('CollectionController', function($scope){
        $scope.items = movies;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isTabSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.directive('itemTitle', function(){
        return{
            restrict: 'E',
            templateUrl: 'item-title.html'
        };
    });

    var movies = [
        {
            name: "Ironman",
            gross: 318.4,
            release: new Date('2008-02-05'),
            inCollection: false,
            shortDescription: 'Billionaire genius invents portable fusion reactor, uses it to build flying suit',
            cast: [
                { name: "Robert Downey, Jr.", character: "Tony Stark / Iron Man" },
                { name: "Terrence Howard", character: "Rhody" },
                { name: "Gwyneth Paltrow", character: "Pepper Potts" },
                { name: "Jeff Bridges", character: "Obadiah Stane" },
                { name: "Clark Gregg", character: "Agent Coulson" },
                { name: "Paul Bettany", character: "Jarvis (voice)" },
                { name: "Shaun Toub", character: "Yinsen"},
                { name: "Samuel L. Jackson", character: "Nick Fury (Cameo)" }
            ],
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Marvel's The Avengers",
            gross: 1518.6,
            release: new Date('2012-05-04'),
            shortDescription: 'Superheros destroy city while fighthing a Norse god and some aliens.',
            inCollection: true,
            cast: [
                { name: "Robert Downey, Jr.", character: "Tony Stark / Iron Man" },
                { name: "Chris Evans", character: "Steve Rogers / Captain America" },
                { name: "Mark Ruffalo", character: "Bruce Banner / The Hulk" },
                { name: "Chris Hemsworth", character: "Thor" },
                { name: "Scarlett Johansson", character: "Natasha Romanoff / Black Widow" },
                { name: "Jeremy Renner", character: "Clint Barton / Hawkeye" },
                { name: "Tom Hiddleston", character: "Loki" },
                { name: "Clark Gregg", character: "Agent Phil Coulson" },
                { name: "Samuel L. Jackson", character: "Nick Fury" },
                { name: "Gwyneth Paltrow*", character: "Pepper Potts" }
            ],
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
    var user = {
        name: 'Dan Lucas',
        status: 'success'
    };
})();
