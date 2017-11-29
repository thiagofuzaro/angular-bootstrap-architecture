(function() {
    'use strict';

    angular
        .module( 'App' )
        .constant( 'ModalMessages', {
            titles: {
                defaultModalTitle: 'Mensagem do Sistema'
            },
            messages: {
                modalMessageExample: 'Mensagem de exemplo.'
            }
        });
}());