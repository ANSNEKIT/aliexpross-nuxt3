<template>
    <LayoutMain>
        <AppContainer
            class="product-page"
            :style="isMobile ? '--areas:var(--mobile)' : '--areas:var(--desktop)'"
        >
            <div class="mt-10 flex flex-wrap">
                <div class="w-2/3">
                    <div class="flex items-center justify-between">
                        <h1 class="text-[32px] leading-9 font-bold">Корзина</h1>
                        <AppToggleButton
                            :items="items"
                            @click="onToggle"
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </AppContainer>
    </LayoutMain>
</template>

<script setup lang="ts">
import AppToggleButton from '~/components/AppToggleButton.vue';
import LayoutMain from '@/layouts/LayoutMain.vue';
import { useStore } from '~/stores/main';

const mainStore = useStore()

const isMobile = computed(() => mainStore.isMobileScreen)

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

const onToggle = (val: string) => console.log(123123, val);

</script>
