export default {
    transclude: true,
    bindings: {
        viewingId: '<',
        articles: '<'
    },
    template: require('./ArticleList.html')
}
