<template>
    <AppContainer>
        <div
            class=" bg-[#ff6437] flex"
            :class="{ 'h-[350px]': !isTablet, 'h-[194px]': isTablet }"
        >
            <div class="min-w-[350px] w-[424px] h-full py-3 px-2 flex flex-col items-center justify-center">
                <h1 class="text-4xl font-bold tracking-tight mb-2">Все по 185 &#x20bd;</h1>
                <h4 class="text-md font-medium tracking-tight mb-3">При заказе от 3 товаров</h4>
                <RouterLink
                    to="/"
                    class="w-[255px] py-3 flex items-center justify-center rounded-3xl bg-black text-white"
                >Купить<span>
                        <img
                            src="~/assets/img/arrowRight.svg"
                            width="25"
                            height="25"
                            alt="buy icon"
                        />
                    </span> </RouterLink>
            </div>
            <div class="flex item">
                <img
                    src="~/assets/img/banner.webp"
                    class="w-full"
                    :class="{ 'h-[280px]': !isTablet, 'h-[194px]': isTablet }"
                    alt="banner icon"
                />
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/main';

const mainStore = useStore()
const isTablet = computed(() => mainStore.isTabletScreen)
</script>