<template>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17 7.5-10 10m0-10 10 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth"></path></svg>
</template>

<script setup>
const props = defineProps({
    strokeWidth: {
        type: String,
        default: '2.4'
    }
})
</script>
