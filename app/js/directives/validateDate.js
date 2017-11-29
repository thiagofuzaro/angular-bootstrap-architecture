(function() {
    'use strict';

    angular
        .module( 'App' )
        .directive( 'validateDate', [function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function( scope, element, attrs, ngModel ) {
                    function setValidation( ngModelValue ) {
                        var day = null,
                            month = null,
                            year = null,
                            date = null;

                        if ( ngModel.$isEmpty( ngModelValue ) ) {
                            return ngModelValue;
                        }

                        day = ngModelValue.length === 8 ? ngModelValue.substring( 0, 2 ) : ngModelValue.split( '/' )[ 0 ];
                        month = ngModelValue.length === 8 ? ngModelValue.substring( 2, 4 ) : ngModelValue.split( '/' )[ 1 ];
                        year = ngModelValue.length === 8 ? ngModelValue.substring( 4, 8 ) : ngModelValue.split( '/' )[ 2 ];
                        date = new Date( year + '/' + month + '/' + day );

                        ngModel.$setValidity( 'invalidDate', date && date.getDate() === Number( day ) && date.getMonth() + 1 === Number( month ) && date.getFullYear() === Number( year ) );

                        return ngModelValue;
                    }

                    ngModel.$parsers.push( setValidation );
                    ngModel.$formatters.push( setValidation );
                }
            };
        }]);
}());