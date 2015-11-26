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
    img-src="your/image/path/or/url.png"
    img-width="100px" 
    img-height="100px" 
    loader="<img src='my/preloader/spinner.gif'>" 
    fallbackSrc="fallback/image/in/case/of/error.png" 
></tidy-img>
```

### API

|img-src        | **string** *required* - url or path to your desired image|
|img-width      | **string** *optional* - dimensianal unit, if you don't specify this, you'll want to add your own CSS styles or the image will not be the right size|
|img-height     | **string** *optional* - dimensianal unit, if you don't specify this, you'll want to add your own CSS styles or the image will not be the right size|
|loader         | **string** *optional* - HTML markup (*not* an actual element reference), for example `<b class="loader">Loading...</b>`|
|fallbackSrc    | **string** *optional* - url or path to fallback image in case we couldn't load the intended image|

***NOTE***
* You should apply your own styles to this directive.
* All of the attributes accept interpolated variables.
* If don't pass in a width or height, then your image container might now be
  visible since it has 0x0px dimensions. 
