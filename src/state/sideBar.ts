import { reactive } from 'vue'

export const sideBarStore = reactive({
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen
  },
})
