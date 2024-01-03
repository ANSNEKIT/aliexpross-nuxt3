<template>
    <LayoutMain>
        <AppContainer
            class="product-page"
            :style="isMobile ? '--areas:var(--mobile)' : '--areas:var(--desktop)'"
        >
            <div class="mt-10 flex gap-4">
                <div class="w-2/3 mt-3">
                    <div class="flex items-center justify-between">
                        <h1 class="text-[32px] leading-9 font-bold">Корзина</h1>
                        <div class="flex items-center gap-2">
                            <AppToggleButton
                                :items="items"
                                class="mr-2"
                                @click="onToggle"
                            />
                            <AppButton @click="onDelete">
                                <IconsIconBacket class="w-8 h-8 rounded-full p-1 hover:bg-neutral-300" />
                            </AppButton>
                            <AppCheckbox
                                v-model="allChecked"
                                color="gray"
                                checked-color="dark-red"
                            />
                        </div>
                        
                    </div>
                </div>
                <div class="w-[380px]">
                    <h2 class="text-base font-semibold text-[#18181b] mb-1.5">Оформите заказ</h2>
                    <BacketDetail :checkout-group="backetDetail" />
                </div>
            </div>
            <div></div>
        </AppContainer>
    </LayoutMain>
</template>

<script setup lang="ts">
import AppToggleButton from '~/components/AppToggleButton.vue';
import LayoutMain from '@/layouts/LayoutMain.vue';
import { useStore } from '~/stores/main';

const mainStore = useStore()

const isMobile = computed(() => mainStore.isMobileScreen)
const basket = computed(() => mainStore.basket)
const backetDetail = {
    items: [
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=1",
            itemId: "asdf1",
        },
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=2",
            itemId: "asdf2",
        },
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=3",
            itemId: "asdf3",
        },
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=4",
            itemId: "asdf4",
        },
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=5",
            itemId: "asdf5",
        },
        {
            imgUrl: "https://source.unsplash.com/random/100x100?sig=6",
            itemId: "asdf6",
        },
    ],
    itemsQuantitySum: 6,
    itemNum: 2,
    displayPrice: {
        currency: "RUB",
        formattedPrice: "191 529,02 ₽",
        value: "191529.02",
    },
    shippingPrice: {
        currency: "RUB",
        formattedPrice: "199,00 ₽",
        value: "199.00",
    },
}

const items = [
    {
        id: 'wgdsg1',
        icon: 'store',
        title: 'По магазинам',
        name: 'inStore',
    },
    {
        id: 'oeihlsdbsg2',
        icon: 'checkList',
        title: 'Общим списком',
        name: 'global',
    }
]

const allChecked = ref(false);

const onToggle = (val: string) => console.log(123123, val);
const onDelete = (val: string) => console.log(777)
</script>
