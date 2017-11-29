(function() {
    'use strict';

    angular
        .module( 'App' )
        .service( 'AjaxExampleServices', [ 'XHRFactory', 'ServiceURL', function( XHRFactory, ServiceURL ) {
            this.getRegisters = function() {
                var getRegistersURL = ServiceURL.xpto;

                return XHRFactory.get( getRegistersURL );
            };
        }]);
}());