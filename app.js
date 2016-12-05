/* cc-philip_chung-comment_system */

import './assets/css/app.scss'; 
import angular from 'angular';
import ngRoute from 'angular-route';

angular.module('app', ['ngRoute'])

 // Services
.service('Articles', require('./services/Articles.js').default)
.service('Comments', require('./services/Comments.js').default)
.service('API', require('./services/API.js').default)
.service('Auth', require('./services/Auth.js').default)

 // Components
.component('loginContainer', require('./components/Login/LoginContainer.js').default)
.component('articleContainer', require('./components/Articles/ArticleContainer.js').default)
.component('scoreContainer', require('./components/Score/ScoreContainer.js').default)
.component('commentContainer', require('./components/Comments/CommentContainer.js').default)

// Presentational
.component('modalBox',  require('./components/Modal/ModalBox.js').default)
.component('articleList', require('./components/Articles/ArticleList.js').default)
.component('articleForm', require('./components/Articles/ArticleForm.js').default)
.component('commentList', require('./components/Comments/CommentList.js').default)
.component('commentForm', require('./components/Comments/CommentForm.js').default)
.component('loginForm', require('./components/Login/LoginForm.js').default)

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:topic?', {
        template: '<article-container></article-container>',
        reloadOnSearch: false
      })
    $locationProvider.html5Mode(true);
}])

.controller('appController', ['$scope', '$rootScope', function($scope, $rootScope) {
    const vm = this;
    vm.isAuth = false;
    vm.modal = {
        show: false,
        type: ''
    };

    $rootScope.$on('show-modal', function (event, message) {
        if (!vm.modal.show) {
            showModal(message);
            setTimeout(() => {
                $scope.$apply(() => closeModal());
            }, 2000);
        }
    });
  
    function showModal(type, message) {
        vm.modal.show = true;
        vm.modal.type = type;
        vm.modal.message = message;
    }
 
    function closeModal() {
        vm.modal.show = false;
    }
}]);


 

 
 

 