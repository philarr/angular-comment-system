export default {
    bindings: {
        parentId: '<',
        incrementComment: '&'
    },
    template: require('./CommentContainer.html'),
    controller: ['$scope', '$rootScope', 'API', function ($scope, $rootScope, API) {

        const vm = this;
        vm.$onInit = () => {
            vm.text = "";
            vm.isSending = false;
            API.getComments(vm.parentId).then( result => {
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
            API.postComment(vm.parentId, vm.text).then( result => {
                if (result) {
                    if (vm.incrementComment) vm.incrementComment({ id : { id: vm.parentId } });
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