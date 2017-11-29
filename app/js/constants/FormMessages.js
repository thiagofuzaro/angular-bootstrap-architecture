(function() {
    'use strict';

    angular
        .module( 'App' )
        .constant( 'FormMessages', {
            requiredField: 'Este campo é de preenchimento obrigatório.',
            emailField: 'Este e-mail é inválido.',
            invalidDate: 'Esta data é inválida.',
            maxlength2: 'Este campo aceita somente 2 caracteres.',
            maxlength5: 'Este campo aceita somente 5 caracteres.',
            maxlength7: 'Este campo aceita somente 7 caracteres.',
            maxlength10: 'Este campo aceita somente 10 caracteres.',
            maxlength18: 'Este campo aceita somente 18 caracteres.',
            maxlength19: 'Este campo aceita somente 19 caracteres.',
            maxlength20: 'Este campo aceita somente 20 caracteres.',
            maxlength25: 'Este campo aceita somente 25 caracteres.',
            maxlength60: 'Este campo aceita somente 60 caracteres.'
        });
}());