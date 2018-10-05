import { photo } from './apiUrl'
import axios from 'axios'

// All calls return promises.
/**
 * giphyAPI Class for handling photos APIs
 * @class giphyApi
 */
class giphyAPI {
  static getPhotos (limit) {
    limit = limit || 5
    return new Promise((resolve, reject) => {
      axios.get(photo.get + limit)
        .then(resolve)
        .catch(reject)
    })
  }
}

export default giphyAPI
