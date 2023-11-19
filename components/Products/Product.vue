<template>
    <li class="min-w-[136px]">
        <RouterLink class="relative" to="/">
            <div class="mb-1">
                <div class="flex column relative w-full max-w-[216px] max-h-[216px] ">
                    <div class="w-full overflow-hidden flex-grow rounded-3xl">
                        <picture>
                            <img
                                :src="product.urlImg"
                                :alt="product.title"
                            >
                        </picture>
                    </div>
                </div>
                <div class="flex h-4 justify-center p-1 gap-1.5">
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                    <div class="w-2 h-2 min-w-2 min-h-2 rounded-lg bg-neutral-400"></div>
                </div>
            </div>
            <div v-if="product.isTop" class="absolute top-7 left-3 py-[5px] pl-[7px] pr-[9px] bg-neutral-900 rounded-full text-white text-[14px] leading-[14px] font-bold uppercase">Топ</div>
        </RouterLink>
        <div>
            <RouterLink to="/">
                <div class="">
                    <h3 class="h-[39px] max-h-[39px] text-[14px] leading-4 line-clamp-2 text-ellipsis overflow-hidden mb-2">{{ product.title }}</h3>
                    <div class="flex items-center gap-2 text-[14px] mb-1.5">
                        <div v-if="product.rating" class="flex items-center">
                            <IconsIconStar class="w-3.5 h-3.5 mr-1 text-red-700" /> {{ product.rating }}
                        </div>
                        <div v-if="product.buyCount">
                        {{ product.buyCount }} {{ getCountText }}</div>
                    </div>
                    <div class="text-md font-bold">{{ product.price }} &#x20bd;</div>
                    <div v-if="product.deliveryDays" class="flex items-center text-[14px] text-green-600 mb-1.5">
                        <IconsIconTruck class="w-3.5 h-3.5 mr-1" /> До {{ product.deliveryDays  }} дней
                    </div>
                    <div v-if="product.isInstant" class="flex items-center text-[14px] text-green-600 mb-1.5">
                        Мгновенная отправка
                    </div>
                    <div v-if="product.isRecomendation" class="flex items-center text-[14px] text-neutral-500 mb-1.5">
                        Рекомендуем
                    </div>
                </div>
            </RouterLink>
        </div>
    </li>
</template>

<script setup lang="ts">
import { IProductProps } from "@/types"
import { RouterLink } from 'vue-router';

const props = defineProps<IProductProps>()
const product = computed(() => props.product)
const getCountText = computed(() => `${product.value.buyCount === 1 ? 'купил': 'купили'}`)
</script>

<style scoped></style>