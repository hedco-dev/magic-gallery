import { config as configStore } from "../store/configuration"
const store = configStore()

// a mixin to config and propose the main state of application
export const storeResolver = {
  data() {
    return {
      store
    }
  }
}
