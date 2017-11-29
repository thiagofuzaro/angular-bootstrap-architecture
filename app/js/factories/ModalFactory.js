(function() {
    'use strict';

    angular
        .module( 'App' )
        .factory( 'ModalFactory', [ '$uibModal', 'ModalMessages', function( $uibModal, ModalMessages ) {
            var modalPath = '/templates/components/';

            function configurationModal( settings ) {
                return {
                    animation: true,
                    backdrop: 'static',
                    templateUrl: modalPath + settings.definitions.template,
                    controller: settings.definitions.controller,
                    resolve: {
                        modalSettings: {
                            title: settings.title ? settings.title : ModalMessages.titles.defaultModalTitle,
                            message: settings.message
                        }
                    }
                };
            }

            return {
                openModal: function( settings ) {
                    return $uibModal.open( configurationModal( settings ) );
                }
            };
        }]);
}());