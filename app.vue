<template>
    <NuxtPage />
</template>

<script setup lang="ts">
import { useStore } from "~/stores/main";

const mainStore = useStore();

onMounted(() => {
    onResize()
    window.addEventListener('resize', throttledResize)    
})

const onResize = () => {
    // const sm = 640
    const md = 1024
    const xl = 1384
    if (window.innerWidth < md) {
        mainStore.isTabletScreen = true
        return
    }
    if (window.innerWidth < xl) {
        mainStore.isLgScreen = true
        return;
    }
    mainStore.isLgScreen = false;
    mainStore.isTabletScreen = false
}
const throttledResize = throttle(onResize, 50)
</script>
