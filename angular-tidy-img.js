(function() {

    'use strict';

    var tidyImg = angular.module( 'rc.tidyImg', [] );

    tidyImg.directive( 'tidyImg', [function() {

        return {
            restrict: 'AE',
            link: function( scope, element, attrs ) {

                element.css({
                    width: attrs.imgWidth,
                    height: attrs.imgHeight,
                    backgroundSize: attrs.imgWidth + ' ' + attrs.imgHeight,
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block'
                })

                var loader = angular.element( attrs.loader );
                element.append( loader );

                var bgImg = new Image();

                bgImg.onload = function() {
                    loader.remove();
                    element.css({backgroundImage: 'url("' + bgImg.src + '")'});
                };

                bgImg.onerror = function() {
                    bgImg.src = attrs.fallbackSrc;
                };

                bgImg.src = attrs.imgSrc;

                function insertImage( url ) {
                };
            }
        }

    }] )

})();
