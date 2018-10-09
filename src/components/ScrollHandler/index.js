import inViewport from "element-in-view"
import throttle from "throttleit"

const triggers = ["scroll", "resize"]

export /**
 * ScrollHandler handle scrolling of the body and let the user know about it
 *
 * @prop {any} handler is a prop for ScrollHandler to call when scrolling happens
 * @prop {any} preventHandle is a prop for ScrollHandler to handle calling hanlder
 * @returns
 */
const ScrollHandler = {
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
