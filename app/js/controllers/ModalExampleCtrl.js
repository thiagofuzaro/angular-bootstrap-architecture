(function() {
    'use strict';

    angular
        .module( 'App' )
        .controller( 'ModalExampleCtrl', [ '$scope', 'ModalMessages', 'ModalFactory', 'ModalDefinitions', function( $scope, ModalMessages, ModalFactory, ModalDefinitions ) {
            $scope.modalCallback = null;

            $scope.openModal = openModal;

            function init() {
                openModal();
            }

            function openModal() {
                $scope.modalCallback = null;

                ModalFactory
                    .openModal({
                        definitions: ModalDefinitions.messageModal,
                        message: ModalMessages.messages.modalMessageExample
                    }).result.then(function( value ) {
                        $scope.modalCallback = "Você fechou o modal.";
                    });
            }

            init();
        }]);
}());