import { defineStore } from 'pinia'

export const useAnimateStore = defineStore('animate', {
  state: () => ({
    indexAbout: 0
  }),
  actions: {
    setCurrentIndex(index) {
      this.indexAbout = index
    }
  }
})