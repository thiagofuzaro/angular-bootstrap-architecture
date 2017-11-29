(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'ModalCtrl', [ '$scope', '$uibModalInstance', 'modalSettings', function( $scope, $uibModalInstance, modalSettings ) {
            // variáveis expostas
            $scope.modal = modalSettings;

            // funções expostas
            $scope.close = close;

            function close() {
                $uibModalInstance.close();
            }
        }]);
}());