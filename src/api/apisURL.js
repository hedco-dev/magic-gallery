import { apiConfig, NODE_ENV } from "../config"
const config = apiConfig.env[NODE_ENV]

export const photo = {
  get(keyword, limit = config.defaultLimit, offset = config.defaultOffset) {
    if (!keyword) {
      keyword = config.defaultKeyword
    }
    let url = `${config.photoProviderUrl}${config.gifPath}?api_key=${
      config.apiKey
    }&q=${keyword}&limit=${limit}&offset=${offset}`

    return url
  }
}
