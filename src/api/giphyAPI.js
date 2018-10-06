import { photo } from './apisURL'
import axios from 'axios'

// All calls return promises.
/**
 * giphyAPI Class for handling photos APIs
 * @class giphyApi
 */
class giphyAPI {
  static offset = -1
  static getPhotos(limit) {
    limit = limit || 5
    return new Promise((resolve, reject) => {
      axios.get(`${photo.get}${limit}&offset=${++giphyAPI.offset * limit}`)
        .then(p => p.data.data)
        .then(resolve)
        .catch(reject)
    })
  }
}

export default giphyAPI
