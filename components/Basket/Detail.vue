<template>
    <div class="w-full p-3 border border-neutral-100 rounded-lg bg-[#f9f9f9]">
        <div class="flex gap-2 mb-3">
            <picture 
                v-for="(item, idx) in items.slice(0, 4)"
                :key="item.itemId"
            >
                <img
                    :src="item.imgUrl"
                    :alt="'image' + idx"
                    class="w-[60px] h-[60px] rounded-md"
                >
            </picture>
            <div v-if="items.length > 4" class="flex justify-center items-center w-[60px] h-[60px] rounded-md bg-gray-100 text-neutral-500 text-xs">
                {{items.length - 4}}+
            </div>
        </div>
        <hr class="w-full m-0 mb-3 h-[1px] border-none bg-neutral-200">
        <div>
            <div class="flex justify-between items-center mb-2">
                <p class="text-xs text-neutral-700">
                    <span>{{ itemsQuantitySum }} товаров</span> 
                    <span v-if="itemNum">({{ itemNum }} шт.)</span>
                </p>
                <p class="text-xs text-neutral-700">1235 &#x20bd;</p>
            </div>
            <div class="flex justify-between items-center mb-3">
                <p class="text-xs text-neutral-700">Доставка</p>
                <p v-if="!shippingPrice" class="text-xs text-green-600">Бесплатно</p>
                <p v-else class="text-xs text-neutral-700">{{ shippingPrice.formattedPrice }}</p>
            </div>
            <button class="w-full px-3 py-3 flex flex-1 items-center justify-between rounded-md bg-[#bef550] hover:bg-[#d2ff79] text-[#18181b] text-sm font-medium">
                <span>Перейти к оформлению</span>
                <div class="flex items-center text-[14px] leading-4">
                    <span>{{ displayPrice.formattedPrice }}</span>
                    <span>
                        <IconsIconArrowRight
                            width="20"
                            height="20"
                            class="w-[20px] h-[20px]"
                        />
                    </span>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IBacketDetailProps } from '@/types'

const props = defineProps<IBacketDetailProps>()
const { checkoutGroup } = toRefs<IBacketDetailProps>(props)
const {
    items = [],
    itemsQuantitySum = 0,
    itemNum = 0,
    shippingPrice,
    displayPrice,
} = checkoutGroup.value
</script>
