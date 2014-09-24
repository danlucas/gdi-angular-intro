# Class Outline

## Intro
>"AngularJS is not a library.
>
>It doesn't abstract away HTML, CSS, or JavaScript. It doesn't require inheritance from proprietary types. It doesn't use one-way data binding. It doesn't treat testing as an afterthought. It doesn't require boilerplate code. And it's not that complicated.

>AngularJS is a JavaScript framework that embraces extending HTML into a more expressive and readable format. It decreases emphasis on directly handling DOM manipulation from the application logic, allowing for easier testing. It employs efficient two-way data binding and sensible MVC implementation, reducing the server load of applications. It features directives, which are incredibly robust tools that are significant contributors to Angular's ubiquity."
[https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/](https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/)

>"AngularJS fits the definition of a framework the best, even though it's much more lightweight than a typical framework and that's why many confuse it with a library." (angular faq)

>AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you currently have to write. And it all happens within the browser, making it an ideal partner with any server technology.

> Angular is what HTML would have been had it been designed for applications....
[https://docs.angularjs.org/guide/introduction](https://docs.angularjs.org/guide/introduction)


* What angular can do and what it's good for
    * Great making sites fast (some say "responsive" but that's confusing with "responsive design")
    * Need a dynamic website
    * Personally like it for organization

## Bootstrapping
- adding the script tag
- pause to make sure everyone is set up

## Basics of Modules
- Setting up your first App

## Expressions
- simple example: {{1+1}}

## Binding
- show binding div's content to an input field
- show that it can effect any part of the HTML

## Controllers
- Definition: "Controllers are where we define our app’s behavior by defining functions and values." (codeschool)
### Data  
### Adding functions to the scope  
### The dot  

## Sharing data between controllers (services)

## Filters
- hand made text manipulation filter
### Built-in Filters
- Search, limitTo, orderBy

## Directives
- Mention templates here?
- Creating your first directive
- restrictions
- behaviors
- controllers
- talking between directives
- transclusions
- components and containers
- communication between directive


(Break here?)

## Diving deeper into scope
- Isolate Scopes

## Views
- AngularJS - angular.element
- AngularJS - $index, $event, $log
- jqLite and jQuery

## Templates
- templateUrl
- $templateCache

## Routing
- ng-view
- The config function
- $routeProvider api
- $routeParams
- redirectTo
- Promises
- Resolve
- Resolve conventions
- Resolve $routeChangeError
- Directive for Route Handling
- Route Life Cycle

## Putting it all together

### Alternative structure





## Topics to cover

- Quick Model/View/Controller overview?
    - we're going to focus a lot more on the view and controller layers
- Modules
    - dependency injection
- Expressions
- Binding
- Controllers
- Data between controllers
- Scope (.watch(), .apply());
- creating methods on a scope
- filters
- directives
- scope
- code structure
- view and dom
- templates
- routing
- testing
- resources and server ($http & $resource, basically where do you get outside data)

## Sources

[https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/](https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/)  
[http://ruoyusun.com/2013/05/25/things-i-wish-i-were-told-about-angular-js.html](http://ruoyusun.com/2013/05/25/things-i-wish-i-were-told-about-angular-js.html)  
[http://campus.codeschool.com/courses/shaping-up-with-angular-js/](http://campus.codeschool.com/courses/shaping-up-with-angular-js/)  
[https://egghead.io/](https://egghead.io/)  
[https://docs.angularjs.org/api](https://docs.angularjs.org/api)  
