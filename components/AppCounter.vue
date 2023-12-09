<template>
    <div class="h-full flex items-center justify-center p-3 rounded-full bg-transparent border border-neutral-200 text-sm leading-4">
        <button class="px-2" @click="emit('update:modelValue', modelValue - 1)">
            <IconsIconMinus class="w-3.5 h-3.5" />
        </button>
        <span class="flex items-center justify-center w-[35px]">{{ modelValue }}</span>
        <button class="px-2" @click="addItem()">
            <IconsIconPlus class="w-3.5 h-3.5" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { IAppCounterProps } from "@/types";

const props = defineProps<IAppCounterProps>()
const emit = defineEmits(['update:modelValue'])
const { modelValue, maxCount } = toRefs(props)
const addItem = () => modelValue.value + 1 <= maxCount.value ? emit('update:modelValue', modelValue.value + 1) : null;
</script>
