import api from '../../api/giphyAPI'
import galleryActions from './galleryActionType'
const { GET_PHOTOS } = galleryActions

export /**
 * an action to ftech photos from the API
 * @returns
 */
const getPhotos = (limit) => {
  return {
    type: GET_PHOTOS,
    payload: api.getPhotos(limit)
  }
}
