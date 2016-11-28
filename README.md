# angular-comment-system
Some sort of reddit clone built with Angular 1.5.8

### Installation

####Production
```
npm install
npm run build
npm start
```

####Development
```
npm run dev-server
node ./server.js
```
*index.html script and link tags will need to be accessing webpack-dev-server at localhost:8080/dist/*

____

## Structure


### Containers

- ArticleContainer
 - Fetches articles, ng directives for conditional rendering.
 - Handles user input and posting from article-form.

- CommentContainer
 - Fetches comments by viewingId passed in as prop.
 - Handles user input and posting from comment-form.

- LoginContainer
 - Uses Auth service for conditional rendering of login-form or transcluded component
 - Handles user input and posting from login-form.
 
======
 
### Presentational
- Components with all the CSS styling.
- Should only contain minimal/presentational logic.
- Data fetching should be in container and passed to these components as props.

======

### Services

- Articles.js / Comments.js
 - Simulate server API, this wont be needed if back-end exists.
 
- API.js
 - Client side API with latency added in for realism.
 - Handles all auth/non-auth calls to the server.
 
- Auth.js
 - Should only be injected to authorization components.
 - Other components should call API directly instead of checking auth state by itself.
