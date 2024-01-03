import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
        isMobileScreen: false,
        isTabletScreen: false,
        isLgScreen: false,
        basket: [],
    }
  },
  persist: true,
})