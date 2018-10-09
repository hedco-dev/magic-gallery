import { apiConfig, NODE_ENV } from "../config"
// handle the config from current env
const config = apiConfig.env[NODE_ENV]

// making photo api url based on config and the parametters
export const photo = {
  /**
   *
   *
   * @param {any} keyword for saerch in the target API
   * @param {any} [limit=config.defaultLimit] limitation of how many items fetch from a API call
   * @param {any} [offset=config.defaultOffset] skiping of the data in the storage queue
   * @returns
   */
  get(keyword, limit = config.defaultLimit, offset = config.defaultOffset) {
    if (!keyword) {
      keyword = config.defaultKeyword
    }
    let url = ""
    if (NODE_ENV === "development") {
      url = `${config.photoProviderUrl}${config.gifPath}/${limit}/${offset}?keyword=${keyword}`
    } else {
      url = `${config.photoProviderUrl}${config.gifPath}?api_key=${
        config.apiKey
      }&q=${keyword}&limit=${limit}&offset=${offset}`
    }
    return url
  }
}
