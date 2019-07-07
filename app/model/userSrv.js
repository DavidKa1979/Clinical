app.factory("userSrv", function ($q) {

    var activeUser = null; // new User({id: 1, fname: "Nir" ...})

    function User(parseUser) {
        this.id = parseUser.id;
        this.fname = parseUser.get("fname");
        this.lname = parseUser.get("lname");
        this.email = parseUser.get("email");
        this.pwd = parseUser.get("pwd");
    }


    function isLoggedIn() {
        return activeUser ? true : false;
    }

    // signup

    function signUp(fname, email, pwd) {
        var async = $q.defer();
        const user = new Parse.User()
        user.set('username', fname);
        user.set('email', email);
        user.set('password', pwd);

        user.signUp().then(function (user) {
            console.log('User signed up', user);
            activeUser = new User(user);
            async.resolve(activeUser);
        }).catch(error => {
            console.error('Error while signing up user', error);
            async.reject(arror);
        });
        return async.promise;

    }

    // signup

    // login will check if the user and password exists. If so it will update the active user 
    // variable and will return it
    function login(email, pwd) {
        var async = $q.defer();

        activeUser = null;

        // Pass the username and password to logIn function
        Parse.User.logIn(email, pwd).then(function (user) {
            // Do stuff after successful login
            console.log('Logged in user', user);
            activeUser = new User(user);
            async.resolve(activeUser);
        }).catch(error => {
            console.error('Error while logging in user', error);
            async.reject(error);
        });

        return async.promise;
    }



    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        signUp: signUp,
        getActiveUser: getActiveUser
    }

});