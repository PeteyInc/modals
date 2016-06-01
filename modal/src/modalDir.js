angular.module('app').directive('modalDir', function() {
    return {
        restrict: 'E',
        templateUrl: '/modalTemp.html',
        scope: {
            show: '='
        },
        link: function(scope) {

            scope.closeModal = function() {
                scope.show = false;
                var body = document.getElementsByTagName('body')[0];
                body.style.overflow = '';
            };
        }
    }
    
})