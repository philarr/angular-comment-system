export default ['$rootScope', ($rootScope) => {

    const User = {
        isAuthed: false,
        username: ''
    };

    function notify() {
        $rootScope.$emit('auth-notify', User);
    }
    
    return {
        subscribe: (scope, callback) => {
            const unsubscribe = scope.$on('auth-notify', callback);
            return unsubscribe;
        },
        auth: (username, password) => {
            if (User.isAuthed) return true; 
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    User.isAuthed = true;
                    User.username = username;
                    notify();
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
