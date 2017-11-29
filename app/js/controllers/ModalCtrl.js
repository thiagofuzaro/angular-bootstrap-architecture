(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'ModalCtrl', [ '$scope', '$uibModalInstance', 'modalSettings', function( $scope, $uibModalInstance, modalSettings ) {
            $scope.modal = modalSettings;

            $scope.close = close;

            function close() {
                $uibModalInstance.close();
            }
        }]);
}());