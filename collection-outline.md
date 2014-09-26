# Creating the Marvel Movie Collection App

## What does it do (by steps)

- display item and some data for the item
- manipulate data with angular filters
- Display a list of movies and their data
- build from to allow user to enter in a new item into the collection


## What can it do (optional steps)

- filter list of based on user input
- form validation validation

1. Bootstrapping the application
    - set up a new HTML with angular in a script tag
    - add a CSS library for convenience

2. Create your app.js file, add main app module code
```
var app = angular.module('store', []);
```

3. Include module on HTML page
    - place script tag below angular script tag
    - add `ng-app=module-name` attribute to html, body or div tag
