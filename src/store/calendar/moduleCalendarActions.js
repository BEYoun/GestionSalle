/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js"

export default {
  addEvent({
    commit
  }, event) {
    commit('ADD_EVENT', Object.assign(event))
  },
  fetchEvents({
    commit
  }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/getSalleDate")
        .then((response) => {
          commit('SET_EVENTS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  fetchEventLabels({
    commit
  }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/getEventTest")
        .then((response) => {
          commit('SET_LABELS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  editEvent({
    commit
  }, event) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/${event.id}`, {
          event: event
        })
        .then((response) => {

          // Convert Date String to Date Object
          let event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  removeEvent({
    commit
  }, eventId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/apps/calendar/event/${eventId}`)
        .then((response) => {
          commit('REMOVE_EVENT', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  eventDragged({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {
          payload: payload
        })
        .then((response) => {

          // Convert Date String to Date Object
          let event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
