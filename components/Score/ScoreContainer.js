export default {
    bindings: {
        score: '<',
        articleId: '<'
    },
    template: require('./Score.html'),
    controller: ['$scope', 'API', function ($scope, API) {
        const vm = this;
        vm.voted = false;
 
        vm.vote = () => {
            if (!vm.voted) {
                API.upvoteArticle(vm.articleId).then( result => {
                    if (result) {
                        $scope.$apply(() => {
                            vm.score++;
                            vm.voted = true;
                        });
                    }
                });
            }
            else {
                API.downvoteArticle(vm.articleId).then( result => {
                    if (result) {
                        $scope.$apply(() => {
                            vm.score--;
                            vm.voted = false;
                        });
                    }
                });
            }
        }
    }]
}