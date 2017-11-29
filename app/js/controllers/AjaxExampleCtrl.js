(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'AjaxExampleCtrl', [ '$scope', 'ServiceURL', 'XHRFactory', function( $scope, ServiceURL, XHRFactory ) {
            // variáveis expostas
            $scope.callback = [];

            function getRegisters() {
                XHRFactory
                .get( ServiceURL.xpto )
                .then( getRegistersDone, getRegistersFail );
            }

            function getRegistersDone( data ) {
                $scope.callback = data.data;
            }

            function getRegistersFail( data ) {
                console.log( data );
            }

            getRegisters();
        }]);
}());