angular.module('app').controller('mainCtrl', function($scope) {

    $scope.show = false;

    $scope.openModal = function() {
        $scope.show = true;
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = 'hidden';
    };

    $scope.closeModal = function() {
        $scope.show = false;
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = '';
    };

});
