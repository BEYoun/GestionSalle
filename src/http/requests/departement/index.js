import axios from "../../axios/index.js"
import qs from 'querystring'


export default {

  getAll() {
    const requestBody = {}

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.get("/api/departements", qs.stringify(requestBody), config)
  },
}
