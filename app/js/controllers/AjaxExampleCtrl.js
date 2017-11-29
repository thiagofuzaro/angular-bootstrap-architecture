(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'AjaxExampleCtrl', [ '$scope', 'AjaxExampleServices', function( $scope, AjaxExampleServices ) {
            $scope.callback = [];

            function init() {
                getRegisters();
            }

            function getRegisters() {
                AjaxExampleServices.getRegisters()
                .then( getRegistersDone, getRegistersFail );
            }

            function getRegistersDone( data ) {
                $scope.callback = data.data;
            }

            function getRegistersFail( data ) {
                console.log( data );
            }

            init();
        }]);
}());