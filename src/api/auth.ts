import * as firebase from "firebase/app";

export const signInWithPopup = async () => {
    return new Promise((resolve, reject) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
            resolve(result);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("🔒 Authorization =>", errorCode, errorMessage);
            reject(error);
            // ...
          });
          
    });
}

export const signInWithCredentials = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("🔒 Authorization =>", errorCode, errorMessage);
                reject(error);
                // ...
            });
    });
}

export const signUpWithCredentials = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("🔒 Authorization =>", errorCode, errorMessage);
                reject(error);
                // ...
            });
    });
}

export const getCurrentUserIdToken = async () => {
    return new Promise<string>((resolve, reject) => {
        firebase.auth()?.currentUser?.getIdToken(true).then(function(idToken) {
            resolve(idToken);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("🔒 Authorization =>", errorCode, errorMessage);
            reject(error);
          });
    });
}