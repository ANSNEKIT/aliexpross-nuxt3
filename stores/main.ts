import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        isMobileScreen: false,
        isTabletScreen: false,
        isLgScreen: false,
    }),
    persist: true,
})