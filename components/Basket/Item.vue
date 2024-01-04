<template>
    <div class="w-full flex gap-2">
        <div class="w-1/2 min-w-1/2 flex">
            <RouterLink :to="link" class="flex-shrink-0 flex column relative mr-2">
                <div class="w-full">
                    <picture>
                        <img
                            :src="imgUrl"
                            :alt="title"
                            width="120"
                            height="120"
                            class="w-[120px] h-[120px] rounded-3xl"
                        >
                    </picture>
                </div>
                <div class="absolute top-2 left-2">
                    <div
                        v-for="(tag, index) in tags" 
                        :key="index"
                        class="px-2 py-1.5 bg-neutral-900 text-white font-medium text-sm leading-[14px] rounded-3xl">
                        {{ tag }}
                    </div>
                </div>
            </RouterLink>
            <div>
                <RouterLink :to="link" class="text-neutral-600 text-xs">
                    <h3 class="line-clamp-2 mb-0.5">{{ title }}</h3>
                </RouterLink>
                <p class="underline text-xs text-black mb-1.5">{{ subtitle }}</p>
                <RouterLink :to="storeLink" class="flex items-center gap-1 mb-1.5">
                    <IconsIconStore class="w-4 h-4" />
                    <p class="text-xs text-neutral-800 truncate">{{ store }}</p>
                </RouterLink>
                <AppCounter
                    v-if="isTablet"
                    v-model="quantity.currentCount"
                    :max-count="quantity.maxCount"
                    is-show-delete
                    class="w-max border-2 font-bold"
                />
            </div>
        </div>
        <div class="w-1/2 flex flex-1">
            <AppCounter
                v-if="!isTablet"
                v-model="quantity.currentCount"
                :max-count="quantity.maxCount"
                is-show-delete
                class="w-max h-max border-2 mr-5"
            />
            <div class="flex flex-col">
                <div class="text-xs">
                    <span class="text-neutral-700 line-through mr-1.5">{{ oldPrice.formattedPrice }}</span>
                    <span class="text-red-700">{{ discountPercent }}</span>
                </div>
                <p class="text-lg font-bold">{{ price.formattedPrice }}</p>
                <div>
                    <p v-if="!shippingPrice" class="text-xs font-bold">Доставка бесплатно</p>
                    <p v-else class="text-xs font-medium text-neutral-600">
                        Доставка {{ shippingPrice.formattedPrice }}
                    </p>
                </div>
            </div>
            <AppCheckbox
                v-model="checked"
                color="gray"
                checked-color="dark-red"
                class="h-max p-0 ml-auto"
                :label-classes="['p-0']"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IBasketItemProps } from '@/types'
import { useStore } from '~/stores/main';
import { useBasketStore } from '~/stores/basket';

const mainStore = useStore();
const basketStore = useBasketStore();

const props = defineProps<IBasketItemProps>()
const emit = defineEmits(['changeQuantity'])

const isTablet = computed(() => mainStore.isTabletScreen)
const { 
    id,
    title,
    subtitle,
    link,
    store,
    storeLink,
    tags = [],
    imgUrl,
    oldPrice,
    discountPercent,
    shippingPrice,
    price,
 } = props.item

const quantity = ref({
    currentCount: 1,
    maxCount: 1000,
})
const checked = ref(false)

watch(quantity.value, () => {
    basketStore.changeItemQuantity(id, quantity.value)
})
watch(checked, () => {
    basketStore.changeItemChecked(id, checked.value)
})
</script>