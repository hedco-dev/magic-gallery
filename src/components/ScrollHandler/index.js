import inViewport from "element-in-view"
import throttle from "throttleit"

const triggers = ["scroll", "resize"]

export const ScrollHandler = {
  name  : "ScrollHandler",
  props : {
    handler: {
      type     : Function,
      required : true
    },
    preventHandle: {
      type    : Boolean,
      default : true
    }
  },
  mounted() {
    this.checkInView()
  },
  methods: {
    checkInView() {
      const execute = () => {
        const inView = inViewport(this.$refs.scroll, { threshold: 0 })
        if (!this.preventHandle && inView) {
          this.handler()
        }
      }

      execute()

      // Add event listeners
      this.check = throttle(execute, 200)
      triggers.forEach(event => window.addEventListener(event, this.check))
    }
  },
  render(h) {
    return h(
      "footer",
      {
        ref: "scroll"
      },
      this.$slots.default
    )
  },
  beforeDestroy() {
    triggers.forEach(event => window.removeEventListener(event, this.check))
  }
}

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(ScrollHandler.name, ScrollHandler)
}
