export default {
    bindings: {
        viewingId: '<',
        incrementComment: '&'
    },
    template: require('./CommentContainer.html'),
    controller: ['$scope', '$rootScope', 'API', function ($scope, $rootScope, API) {

        const vm = this;
        vm.isSending = false;
        vm.comments = false;
        vm.text = "";

        vm.$onInit = () => {
            API.getComments(vm.viewingId).then( result => {
                $scope.$apply(() => {
                    vm.comments = result.comments;
                });
            });
        };

        vm.post = () => {
            if (vm.text.length === 0) {
                 $rootScope.$emit('show-modal', 'Write something!');
                 return;
            }
            vm.isSending = true;
            API.postComment(vm.viewingId, vm.text).then( result => {
                if (result) {
                    if (vm.incrementComment) vm.incrementComment({ id: vm.viewingId });
                    $scope.$apply(() => {
                        vm.comments = result.comments;
                        vm.isSending = false;
                        vm.text = "";
                    });
                }
            });
         };
    }]
}