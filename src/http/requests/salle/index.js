import axios from "../../axios/index.js"
import qs from 'querystring'


export default {

  checkSalle(idSalle, fromDate, toDate) {
    const requestBody = {
      idSalle: idSalle,
      fromDate: fromDate,
      toDate: toDate
    }
    console.log(requestBody)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post("/api/salle/checkSalle", qs.stringify(requestBody), config)
  },
}
