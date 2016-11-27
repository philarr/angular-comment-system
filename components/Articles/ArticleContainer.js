export default {
    template: require('./ArticleContainer.html'),
    controller: ['$scope', '$rootScope', '$location', 'API', function ($scope, $rootScope, $location, API) {
        const vm = this;
        let listener = null;
        vm.isSending = false; 
        vm.title = "";
        vm.url = "";
        vm.desc = "";

        vm.$onInit = () => {
            API.getArticles().then( result => {
                 $scope.$apply(() => {
                    vm.articles = result;
                    updateViewingId();
                 });
            });
            listener = $scope.$on('$routeUpdate', updateViewingId);
        }

        vm.$onDestroy = () => {
            listener();
        }

        vm.post = () => { 
            if (vm.title.length === 0 || vm.url.length === 0) {
                 $rootScope.$emit('show-modal', 'Title and URL required!');
                 return false;
            }
            vm.isSending = true;
            API.postArticle(
                vm.title, 
                (vm.url.slice(0, 7) === 'http://') ? vm.url.slice(7) : vm.url,
                vm.desc
            ).then( result => {
                if (result) {
                    $scope.$apply(() => {
                        vm.articles = result;
                        vm.isSending = false;
                        vm.title = "";
                        vm.url = "";
                        vm.desc = "";
                    });
                }
            });
         };

        vm.incrementComment = (id) => {
            vm.articles.forEach((item, index) => {
                if (item.id === id) {
                    vm.articles[index].numComments = vm.articles[index].numComments + 1;
                }
            });
        }
        
        function updateViewingId() {
            vm.viewingId = parseInt($location.search().id);
            vm.showCreateForm = $location.search().create;
        }
    }]
}
