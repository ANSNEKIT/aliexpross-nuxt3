<template>
    <li class="w-[170px]">
        <RouterLink
            to="/"
            class=""
        >
            <div class="w-[170px] p-2 bg-white rounded-md">
                <img
                    :src="`https://source.unsplash.com/random/158x150?sig=${index}`"
                    alt="card image"
                    width="158"
                    height="150"
                    class="rounded-md mb-2"
                >
                <div class="w-full bg-[#f0f4f7] p-1 pt-0 rounded-md">
                    <p class="p-0 m-0 font-medium text-lg leading-6">185,00 &#x20bd;</p>
                    <div class="flex text-[12px] leading-3 font-medium spacing">
                        <p class="pr-1"> -77% </p>
                        <p class="text-[#a0a0ab] line-through">807,34</p>
                    </div>
                </div>
            </div>
    </RouterLink>
</li></template>

<script setup lang="ts">
import { ISliderCard } from "@/types/index"

const props = defineProps<ISliderCard>()
const index = computed(() => props.index)
</script>
