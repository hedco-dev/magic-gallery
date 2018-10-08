import { apiConfig } from "../config"

export const photo = {
  get: `${apiConfig.photoProviderUrl}${apiConfig.gifPath}&api_key=${apiConfig.apiKey}&limit=`
}
