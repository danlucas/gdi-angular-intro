# Creating the Marvel Movie Store App

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
