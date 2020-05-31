import departement from "../../http/requests/departement/index.js"
import salle from "../../http/requests/salle/index.js"
import reserve from "../../http/requests/reservation/index.js"
import axios from "@/axios.js"
import qs from 'querystring'
// import router from '@/router'
export default {
  getAllDep({
    commit
  }) {
    return new Promise((resolve, reject) => {
      departement.getAll()
        .then(response => {
          if (response.data) {
            // Navigate User to homepage

            // Update user details
            commit('dep/SET_DEPARTEMENTS', response.data, {
              root: true
            })

            resolve(response)
          } else {
            reject({
              message: "Something wwrong"
            })
          }

        })
        .catch(error => {
          console.log("erreur mod au")
          reject(error)
        })
    })
  },
  checkSalle({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      salle.checkSalle(payload.salleDetails.idSalle,
          payload.salleDetails.fromDate,
          payload.salleDetails.toDate)
        .then((response) => {
          // console.log(response)
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        });
    })
  },
  createEvent({
    dispatch
  }, payload) {

    const {
      nom,
      sujet,
      description
    } = payload.eventDetails
    return new Promise((resolve, reject) => {

      reserve.createEvent(nom, sujet, description)
        .then((response) => {
          payload.reservationDetails.eventId = response.data.eventId
          dispatch('createReservation', payload).then((response) => {
            console.log(payload)
            payload.salleDetails.salles.forEach(el => {
              var payloadLocal = {
                salleId: el.idSalle,
                reservationId: response.reservationId
              }
              dispatch('createReserveSalle', payloadLocal).then((response) => {
                console.log(response)

              }).catch((error) => {
                console.log(error)
                reject(error)
              })
            })

            resolve(response)
          }).catch((error) => {
            console.log(error)
            reject(error)
          })
        }).catch((error) => {
          console.log(error)
          reject(error)
        });

    })
  },
  creationReservationUnique({
    dispatch
  }, payload) {

    return new Promise((resolve, reject) => {

      dispatch('createReservationUser', payload).then((response) => {
        console.log(payload)
        payload.salleDetails.salles.forEach(el => {
          var payloadLocal = {
            salleId: el.idSalle,
            reservationId: response.reservationId
          }
          dispatch('createReserveSalle', payloadLocal).then((response) => {
            console.log(response)

          }).catch((error) => {
            console.log(error)
            reject(error)
          })
        })

        resolve(response)
      }).catch((error) => {
        console.log(error)
        reject(error)
      })

    })
  },
  createReservation({
    commit
  }, payload) {
    const {
      // salles,
      eventId,
      fromDate,
      toDate
    } = payload.reservationDetails
    return new Promise((resolve, reject) => {

      reserve.createReservation(eventId, fromDate, toDate)
        .then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })

    })
  },
  createReservationUser({
    commit
  }, payload) {
    const {
      // salles,
      fromDate,
      toDate
    } = payload.reservationDetails
    return new Promise((resolve, reject) => {

      reserve.createReservationUser(fromDate, toDate)
        .then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })

    })
  },
  createReserveSalle({
    commit
  }, payload) {
    console.log(payload)
    const {
      // salles,
      salleId,
      reservationId
    } = payload
    console.log(salleId,
      reservationId)
    return new Promise((resolve, reject) => {

      reserve.createReserveSalle(salleId, reservationId)
        .then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })

    })
  },
  createSalle({
    commit
  }, payload) {
    const {
      // salles,
      eventId,
    } = payload.salleDetails
    return new Promise((resolve, reject) => {
      console.log("salle")
      reserve.createSalle(eventId, salleId)
        .then((response) => {
          console.log(response.data.reservationId)
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })

    })
  },
  validerEvenement({
    commit
  }, id) {
    return new Promise((resolve, reject) => {
      const requestBody = {
        id
      }
      console.log(requestBody)
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.post("/api/validerEvenement", qs.stringify(requestBody), config)
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  refuserEvenement({
    commit
  }, id) {
    return new Promise((resolve, reject) => {
      const requestBody = {
        id
      }
      console.log(requestBody)
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.post("/api/refuserEvenement", qs.stringify(requestBody), config)
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getSalles({
    commit
  }) {
    return new Promise((resolve, reject) => {

      console.log(requestBody)
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.get("/api/getSalles", config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
