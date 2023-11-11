<template>
    <div class="absolute z-30 top-1/2 -translate-y-1/2 flex" :class="{ 'left-0': left, 'right-0': right }">
        <div class="w-[25px] h-[25px] flex items-center justify-center">
            <button
                class="w-full h-full p-1 rounded-full bg-white shadow-md"
                @click="$emit('navButtonClick')"
            >
                <slot />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    right: {
        type: Boolean,
        default: false,
    },
    left: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['navButtonClick'])
</script>