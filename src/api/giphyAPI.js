import { photo } from "./apisURL"
import axios from "axios"

// All calls return promises.
/**
 * giphyAPI Class for handling photos APIs
 * @class giphyApi
 */
class giphyAPI {
  static offset = -1
  static getPhotos(limit = 20, keyword) {
    return new Promise((resolve, reject) => {
      axios
        .get(photo.get(keyword, limit, ++giphyAPI.offset * limit))
        .then(_ => _.data.data)
        .then(_ =>
          _.map(__ => {
            return {
              id     : __.id,
              title  : __.title,
              url    : __.images.original_still.url,
              width  : __.images.original_still.width,
              height : __.images.original_still.height
            }
          })
        )
        .then(resolve)
        .catch(reject)
    })
  }
}

export default giphyAPI
