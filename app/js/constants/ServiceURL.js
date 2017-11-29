(function() {
    'use strict';

    angular
        .module( 'App' )
        .constant( 'ServiceURL', {
            xpto: 'https://jsonplaceholder.typicode.com/posts'
        });
}());