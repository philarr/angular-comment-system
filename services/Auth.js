export default ['$rootScope', ($rootScope) => {

    const User = {
        isAuthed: false,
        username: ''
    };

    return {
        auth: (username, password) => {
            if (User.isAuthed) return true; 
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    $rootScope.$emit('show-modal', username + ' logged in!');
                    User.isAuthed = true;
                    User.username = username;
                    resolve(true);
                }, 125);
            });
        },
        warnAuth: () => {
            if (User.isAuthed) return true
            $rootScope.$emit('show-modal', 'You are not logged in!');
            return false;
        },
        isAuthed: () => User.isAuthed,
        getUsername: () => User.username,
    }
}];
