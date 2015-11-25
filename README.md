# angular-tidy-img

A small AngularJS directive that handles that makes working with images a
breeze.

[example](http://www.rcorrie.com/#/demos/tidy-img)

## Install

Install with NPM `npm install --save angular-tidy-img`

Or, install with Bower `bower install --save angular-tidy-img`

Now, declare tidy-img as a dependency.
```javascript
var app = angular.module( 'MyApp', [ 'rc.tidyImg' ] );
```

## Usage

In your templates, apply the tidy-img directive as an `element` or an
`attribute`
```html
<tidy-img
    img-src="your/image/path/or/url.png" // required
    img-width="100px" // required
    img-height="100px" // required
    loader="<img src='my/preloader/spinner.gif'>" // optional
    fallbackSrc="fallback/image/in/case/of/error.png" // optional
></tidy-img>
```

***NOTE***
* All of the attributes accept interpolated variables.
* You can and should apply your own styles or classes to the directive. 
