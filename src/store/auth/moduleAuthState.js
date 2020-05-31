// import auth from "@/auth/authService";

export default {
  isUserLoggedIn: () => {
    let isAuthenticated = false

    // get firebase current user
    // const firebaseCurrentUser = firebase.auth().currentUser

    // if (auth.isAuthenticated() || firebaseCurrentUser) isAuthenticated = true
    // else isAuthenticated = false

    return (localStorage.getItem('userInfo') && isAuthenticated)
  },
}
