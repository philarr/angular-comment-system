export default {
    transclude: true,
    bindings: {
        topicName: '<',
        viewingId: '<',
        articles: '<'
    },
    template: require('./ArticleList.html')
}
