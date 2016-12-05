const ping = 125;

export default ['Articles', 'Comments', 'Auth', (Articles, Comments, Auth) => {
    return {
        downvoteArticle: (articleId) => {
            if (Auth.warnAuth()) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                    }, ping);
                });
            }
            else {
                return Promise.resolve(false);
            }
        },
        upvoteArticle: (articleId) => {
            if (Auth.warnAuth()) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                    }, ping);
                });
            }
            else {
                return Promise.resolve(false);
            }
        },
        getArticles: (topicName) => {
             return new Promise((resolve, reject) => {
                const addCommentNums = Articles
                .get()
                .map( item => Object.assign(item, { numComments: Comments.get(item.id).comments.length }) );
                setTimeout(() => {
                    resolve(addCommentNums);
                }, ping);
            });
        },
        postArticle: (title, url, desc) => {
            if (Auth.warnAuth()) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(Articles.post(title, url, desc));
                    }, ping);
                });
            }
            else {
                return Promise.resolve(false);
            }
        },
        postComment: (articleId, content) => {
            if (Auth.warnAuth()) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Comments.post(articleId, Auth.getUsername(), content));
                }, ping);
            });
            }
            else {
                return Promise.resolve(false);
            }
        },
        getComments: (articleId) => {
             return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Comments.get(articleId));
                }, ping);
                 
            });
        }
    }
}];