<template>
    <div class="inline-flex items-center">
        <label
            class="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="checkbox"
        >
            <input
                :value="modelValue"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:before:bg-gray-900"
                :class="classes"
                :checked="checked"
                :disabled="disabled"
                :readonly="readonly"
                @change="onChecked"
            />
            <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                >
                    <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </span>
        </label>
        <label v-if="$slots.default" class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
            <slot />
        </label>
    </div>
</template>

<script setup lang="ts">
import { ICheckboxProps } from '@/types'

const props = defineProps<ICheckboxProps>()
const emit = defineEmits(['update:modelValue'])
const { modelValue, checked, disabled, readonly, color, checkedColor } = toRefs(props)
const colors = {
    gray: 'border-gray-300',
    'dark-red': 'border-red-950',
}
const colorsChecked = {
    gray: 'checked:border-gray-300 checked:bg-gray-300',
    'dark-red': 'checked:border-red-700 checked:bg-red-700',
}
const classes = computed(() => {
    return [colors[color.value], colorsChecked[checkedColor.value]]
})
const onChecked = (evt: Event) => {
    emit('update:modelValue', (evt.target as HTMLInputElement).checked)
} 
</script>
