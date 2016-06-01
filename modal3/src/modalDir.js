angular.module('app').directive('modalDir', function() {
    return {
        restrict: 'E',
        templateUrl: '/modalTemp.html',
        controller: function($scope, modalSer) {
            $scope.closeModal = function() {
                modalSer.closeModal();
            };
        }

    }

})