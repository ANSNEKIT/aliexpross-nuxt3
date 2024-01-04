<template>
    <div class="h-max flex items-center justify-around p-2 rounded-full bg-transparent border border-neutral-200 text-sm leading-4">
        <button class="px-2" @click="onMinus">
            <IconsIconBacket v-if="isShowDelete && modelValue === 1" class="w-3.5 h-3.5" />
            <IconsIconMinus v-else class="w-3.5 h-3.5" />
        </button>
        <span class="flex items-center justify-center px-2">{{ modelValue }}</span>
        <button class="px-2" @click="addItem">
            <IconsIconPlus class="w-3.5 h-3.5" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { IAppCounterProps } from "@/types";

const props = defineProps<IAppCounterProps>()
const { modelValue, maxCount, isShowDelete = false } = toRefs(props)
const emit = defineEmits(['update:modelValue', "deleteItem"])

const addItem = () => modelValue.value + 1 <= maxCount.value ? emit('update:modelValue', modelValue.value + 1) : null;
const onMinus = () => {    
    if (isShowDelete && modelValue.value === 1) {
        emit("deleteItem")
    } else {
        emit('update:modelValue', modelValue.value - 1)
    }
}
</script>
