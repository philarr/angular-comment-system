export default [() => {
    const COMMENTS = require('../assets/json/comments.json').comments;
    return {
        get: (articleId) => {
            const commentBucket = COMMENTS.filter( item => item.parentId === articleId );
            return (commentBucket.length === 0) ? { parentId: articleId, comments: [] } : commentBucket[0]
        },
        post: (articleId, user, content) => {
            const commentBucket = COMMENTS.filter( item => item.parentId === articleId );
            const comment = {
                id: Math.random(),
                user,
                content
            };

            // Add comment bucket if the article is missing one
            if (commentBucket.length === 0) {
                const bucket = { 
                    parentId: articleId, 
                    comments: [comment] 
                };
                COMMENTS.push(bucket);
                return bucket;
            }
            else {
                commentBucket[0].comments.push(comment);
            }
 
            return commentBucket[0];
         
        }
    }   
}];