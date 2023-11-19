<template>
    <ul class="w-full flex bg-white overflow-x-scroll pt-3 pb-4 gap-2" :class="[positionClasses]">
        <li
            v-for="(tab, idx) in tabs"
            :key="`${tab}-${idx}`"
            class="text-sm leading-5 font-medium underline-offset-[10px]"
            :class="activeTabIndex === idx ? 'underline !text-[#18181b] !cursor-default': 'text-[#a0a0ab] cursor-pointer'"
        >
            <span class="block py-1">{{ tab.title }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ITabsProps } from "@/types"

const props = defineProps<ITabsProps>()
const activeTabIndex = ref(0);

const position = computed(() => props.position)
const isFixed = computed(() => props.isFixed)
const tabs = computed(() => props.tabs)

const positionClasses = computed(() => {
    if (isFixed.value && position.value) {
        return `sticky left-7 ${position.value}-0 z-30`
    }
    return ''
})
</script>

<style scoped>

</style>