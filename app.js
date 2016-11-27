/* cc-philip_chung-comment_system */

import './assets/css/app.scss'; 
import angular from 'angular';
import ngRoute from 'angular-route';

// Services
import API from './services/API.js';
import Articles from './services/Articles.js';
import Comments from './services/Comments.js';
import Auth from './services/Auth.js';

// Components
import loginContainer from './components/Login/LoginContainer.js';
import articleContainer from './components/Articles/ArticleContainer.js';
import commentContainer from './components/Comments/CommentContainer.js';
import scoreContainer from './components/Score/ScoreContainer.js';
 
// Presentational
import modalBox from './components/Modal/ModalBox.js';
import articleList from './components/Articles/ArticleList.js';
import articleForm from './components/Articles/ArticleForm.js';
import commentList from './components/Comments/CommentList.js';
import commentForm from './components/Comments/CommentForm.js';
import loginForm from './components/Login/LoginForm.js';


angular.module('app', ['ngRoute'])

 // Services
.service('Articles', Articles)
.service('Comments', Comments)
.service('API', API)
.service('Auth', Auth)

 // Components
.component('loginContainer', loginContainer)
.component('articleContainer', articleContainer)
.component('scoreContainer', scoreContainer)
.component('commentContainer', commentContainer)

// Presentational
.component('modalBox',  modalBox)
.component('articleList', articleList)
.component('articleForm', articleForm)
.component('commentList', commentList)
.component('commentForm', commentForm)
.component('loginForm', loginForm)

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<article-container></article-container>',
        reloadOnSearch: false
      })
    $locationProvider.html5Mode(true);
}])

.controller('appController', ['$scope', '$rootScope', function($scope, $rootScope) {
    const vm = this;
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


 

 
 

 