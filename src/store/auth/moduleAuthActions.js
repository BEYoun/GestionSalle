/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js"
import router from '@/router'

export default {

  // JWT
  loginJWT({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      jwt.login(payload.userDetails.email, payload.userDetails.password)
        .then(response => {
          console.log(response.data)
          // If there's user data in response
          if (response.data.userData) {
            // Navigate User to homepage
            router.push(router.currentRoute.query.to || '/')

            // Set accessToken
            localStorage.setItem("accessToken", response.data.accessToken)

            // Update user details
            console.log(response.data.userData)
            commit('UPDATE_USER_INFO', response.data.userData, {
              root: true
            })

            // Set bearer token in axios
            commit("SET_BEARER", response.data.accessToken)

            resolve(response)
          } else {
            reject({
              message: "Wrong Email or Password"
            })
          }

        })
        .catch(error => {
          console.log("erreur mod au")
          reject(error)
        })
    })
  },
  registerUserJWT(payload) {

    const {
      nom,
      prenom,
      email,
      password,
      role
    } = payload.userDetails

    return new Promise((resolve, reject) => {

      // Check confirm password


      jwt.registerUser(nom, prenom, email, password, role)
        .then(response => {
          // Update data in localStorage
          // localStorage.setItem("accessToken", response.data.accessToken)
          // commit('UPDATE_USER_INFO', response.data.userData, {
          //   root: true
          // })

          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  fetchAccessToken() {
    return new Promise((resolve) => {
      jwt.refreshToken().then(response => {
        resolve(response)
      })
    })
  }
}
