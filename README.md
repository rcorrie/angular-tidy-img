[![NPM](https://nodei.co/npm/angular-tidy-img.png)](https://npmjs.org/package/angular-tidy-img)
# angular-tidy-img

A small AngularJS directive that makes working with images a
breeze.

__todo__ ~~[example](http://www.rcorrie.com/#/demos/tidy-img)~~ 

tidy-img lets you pass in a "loader", which will be shown while your image is
being loaded. It also lets you specify a fallback image url in case your image
isn't found.

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
    img-src="your/image/path/or/url.png" <!--- required --->
    img-width="100px" <!--- optional --->
    img-height="100px" <!--- optional --->
    loader="<img src='my/preloader/spinner.gif'>" <!--- optional --->
    fallbackSrc="fallback/image/in/case/of/error.png" <!--- optional --->
></tidy-img>
```

***NOTE***
* You should apply your own styles to this directive.
* The `loader` attribute can be an html element or a simple string.
* All of the attributes accept interpolated variables.
* If don't pass in a width or height, then your image container might now be
  visible since it has 0x0px dimensions. 
