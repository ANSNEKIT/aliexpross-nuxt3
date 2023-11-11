import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
        isTabletScreen: false,
        isLgScreen: false,
    }
  },
  persist: true,
})