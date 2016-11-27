export default [() => {
    const ARTICLES = require('../assets/json/articles.json').articles;
    return {
        get: (id) => id ? ARTICLES.filter( item.id === id ) : ARTICLES,
        post: (title, url, desc) => {
            ARTICLES.unshift({
                id: ARTICLES.length + 1,
                title,
                url,
                desc,
                score: 0,
                numComments: 0
            });
            
            return ARTICLES;
        }
    }
}];