angular.module('app').controller('mainCtrl', function($scope, modalSer) {

    $scope.openModal = function(modalName, css) {
      modalSer.openModal(modalName, css);
    };

    $scope.closeModal = function() {
        modalSer.closeModal();
    };

})