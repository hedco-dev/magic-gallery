import { giphy } from './apiKeys'
export const giphyAPIBaseUrl = 'http://api.giphy.com/v1/'

export const photo = {
  get: `${giphyAPIBaseUrl}gifs/search?q=ryan+gosling&api_key=${giphy}&limit=`
}
