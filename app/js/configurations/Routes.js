(function() {
    'use strict';

    angular
        .module( 'App' )
        .config([ '$routeProvider', function( $routeProvider ) {
            $routeProvider
                .when( '/', {
                    templateUrl: '/templates/views/form-example.html',
                    controller: 'FormExampleCtrl'
                })
                .when( '/exemplo-de-formulario', {
                    templateUrl: '/templates/views/form-example.html',
                    controller: 'FormExampleCtrl'
                })
                .when( '/exemplo-de-modal', {
                    templateUrl: '/templates/views/modal-example.html',
                    controller: 'ModalExampleCtrl'
                })
                .when( '/exemplo-de-ajax', {
                    templateUrl: '/templates/views/ajax-example.html',
                    controller: 'AjaxExampleCtrl'
                })
                .when( '/404', {
                    templateUrl: '/templates/views/404.html'
                })
                .otherwise({
                    redirectTo: '/404'
                });
        }]);
}());