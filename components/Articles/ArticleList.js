export default {
    transclude: true,
    bindings: {
        viewingId: '<?',
        articles: '<',
        incrementComment: '&'
    },
    template: require('./ArticleList.html')
}