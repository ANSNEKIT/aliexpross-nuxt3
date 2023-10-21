<template>
    <fieldset class="w-full h-full py-1.5 pl-3.5 pr-0.5 flex gap-1 justify-between items-center bg-white border border-white rounded-md">
        <input
            type="text"
            class="w-full h-full pr-3 text-[rgb(160, 160, 171)] text-[13px] font-semibold leading-[15px] focus:border-none focus:outline-none rounded-md"
            placeholder="перчатки"
        />
        <div class="flex items-center">
            <button class="w-10 h-10 flex items-center justify-center text-[#a0a0ab] hover:text-[#18181b]">
                <IconsIconClose class="w-5 h-5" />
            </button>
            <button class="m-0 border border-[#b2ed50] bg-[#cf6] text-[18181b] rounded-[100px] text-[13px] leading-4 font-medium hover:bg-[#b8f05b]" :class="{'w-[104px] py-2.5': !isTablet, 'w-[80px] py-1.5': isTablet}">Найти</button>
        </div>
    </fieldset>
</template>

<script setup lang="ts">
import { useStore } from "~/stores/main";

const mainStore = useStore();
const isTablet = computed(() => mainStore.isTabletScreen)
</script>
