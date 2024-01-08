<template>
    <div
        class="fixed inset-0 bg-[#000] z-20"
        :style="{opacity: `${props.opacity}%`}"
        data-testid="app-shadow"
    ></div>
</template>

<script setup lang="ts">
const props = defineProps({
    opacity: {
        type: String,
        default: '60',
    },
})
</script>
