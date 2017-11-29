(function() {
    'use strict';

    angular
        .module( 'App' )
        .constant( 'ModalDefinitions', {
            messageModal: {
                template: 'message-modal.html',
                controller: 'ModalCtrl'
            }
        });
}());