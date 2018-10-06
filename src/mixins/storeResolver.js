import { config as configStore } from '../store/configuration'
const store = configStore()

export const storeResolver = {
  data () {
    return {
      store
    }
  }
}
