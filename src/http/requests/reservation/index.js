import axios from "../../axios/index.js"
import qs from 'querystring'


export default {

  createReservation(eventId, fromDate, toDate) {
    const requestBody = {
      eventId,
      fromDate,
      toDate
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post("/api/createReservation", qs.stringify(requestBody), config)
  },
  createReservationUser(fromDate, toDate) {
    const requestBody = {
      fromDate,
      toDate
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post("/api/createReservationUser", qs.stringify(requestBody), config)
  },
  createReserveSalle(salleId, reservationId) {
    const requestBody = {
      salleId,
      reservationId
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post("/api/createReserveSalle", qs.stringify(requestBody), config)
  },
  createEvent(nom, sujet, description) {
    const requestBody = {
      nom,
      sujet,
      description
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post("/api/createEvent", qs.stringify(requestBody), config)
  }
}
