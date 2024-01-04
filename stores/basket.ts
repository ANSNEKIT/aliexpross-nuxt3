import { defineStore } from 'pinia'
import { IBasketItem } from '~/types'

export const useBasketStore = defineStore('basket', {
    state: () => ({
        basketItems: [] as IBasketItem[],
    }),
    actions: {
        changeItemQuantity(id: string, payload: { currentCount: number, maxCount: number }) {
            const idx = this.basketItems.findIndex((b) => b.id === id)
            if (idx !== -1) {
                this.basketItems.splice(idx, 1, { ...this.basketItems[idx], quantity: payload })
            }
        },
        changeItemChecked(id: string, payload: boolean) {
            const idx = this.basketItems.findIndex((b) => b.id === id)
            if (idx !== -1) {
                this.basketItems.splice(idx, 1, { ...this.basketItems[idx], checked: payload })
            }
        },
        deleteItem(id: string) {
            const idx = this.basketItems.findIndex((b) => b.id === id)
            if (idx !== -1) {
                this.basketItems.splice(idx, 1)
            }
        },
        setItems(items: IBasketItem[]) {
            this.basketItems = items
        },
    },
    persist: true,
})