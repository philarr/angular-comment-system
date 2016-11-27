export default {
    transclude: true,
    template: require('./LoginContainer.html'),
    controller: ['$scope', '$rootScope', 'Auth', function ($scope, $rootScope, Auth) {
        const vm = this;
        vm.isAuthed = Auth.isAuthed();

        vm.$onInit = () => {
            vm.text = "";
            vm.isSending = false;
        };

        vm.login = () => {
            if (vm.text.length === 0) {
                $rootScope.$emit('show-modal', 'Choose a display name!');
                return;
            }
            vm.isSending = true;
            Auth.auth(vm.text).then( result => {
                $scope.$apply(() => {
                    vm.isSending = false;
                    vm.text = "";
                    vm.isAuthed = true;
                });
            });
        }
    }]
}