<template>
    <div class="w-full h-min p-4 bg-neutral-50 rounded-lg border border-[#eee]">
        <div class="relative mb-4">
            <div class="text-[22px] text-black leading-7 font-semibold pr-9">{{ item.price }} &#x20bd;</div>
            <div class="flex gap-3 items-center text-[14px] leading-4 mb-2">
                <span class="text-neutral-600 line-through">{{ item.oldPrice }} &#x20bd;</span>
                <span class="text-black">-{{ item.percentDiscount }}%</span>
            </div>
            <div v-if="item.isCoupon" class="flex items-center w-fit px-1 text-[10px] leading-[18px] font-medium text-white bg-neutral-300 rounded">Есть купоны</div>
            <button class="flex items-center justify-center absolute top-0 right-0 rounded-full p-1.5 hover:bg-neutral-300">
                <IconsIconHeart class="w-5 h-5 min-w-4 min-h-4" />
            </button>
        </div>
        <div class="flex gap-1 text-[15px] leading-4 text-neutral-800 font-medium mb-3">
            <button 
                class="flex flex-col w-1/2 items-center justify-center px-[16px] py-[12px] rounded-md bg-[#bef550]"
                @click="addBasket"
            >
                <span v-if="basketCount === 0">В корзину</span>
                <template v-else>
                    <span class="text-[15px] leading-[15px]">В корзине</span>
                    <span class="text-[11px] leading-[11px] text-[#898993]">Перейти</span>
                </template>
            </button>
            <button v-if="basketCount === 0" class="flex w-1/2 items-center justify-center px-[16px] py-[12px] rounded-md bg-[#ffe45b]">Купить сейчас</button>
            <BaseAppCounter
                v-else
                v-model="basketCount"
                :maxCount="item.limitedCount"
                class="w-1/2"
            />
        </div>
        <div v-if="item.limitedCount" class="text-center text-[11px] leading-3 text-neutral-600">
            Более {{ item.limitedCount }} штук в наличии
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductPriceProps } from "@/types"

const props = defineProps<IProductPriceProps>()
const { item } = toRefs(props)
const basketCount = toRef(5)
const basket = ref({
    ...item.value,
    count: basketCount.value
})

watch(basketCount, () => {
    basket.value.count = basketCount.value
})

const addBasket = async () => {
    if (basketCount.value) {
        await navigateTo({ path: '/shopcart/detail' })
    } else {
        basketCount.value = 1
    }
}
</script>
