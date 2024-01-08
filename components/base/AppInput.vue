<template>
    <div class="flex flex-1 items-center">
        <div
            ref="inputWrapRef"
            id="input-wrapper"
            class="w-full px-[20px] py-1 border-2 rounded-full border-neutral-400 hover:border-neutral-600 relative"
            :class="[...props.inputClasses, isFocusedInput ? '!border-neutral-900' : '']"
        >
            <label 
                v-if="$slots.default"
                for="inputId"
                class="absolute left-[20px] text-neutral-600 transition-all duration-200 ease-out"
                :class="[isFocusedInput ? 'top-[4px] text-[12px] leading-[16px]': 'top-[6px] text-[16px] leading-[42px]']"
            >
                <slot />
            </label>
            <input
                ref="inputRef"
                type="text"
                id="inputId"
                v-bind="$attrs"
                class="w-full h-full pt-2 text-black text-[16px] font-medium leading-[24px] focus:outline-none"
                @focus="isFocusedInput = true"
                @blur="isFocusedInput = false"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { IAppInputProps } from '@/types'

const props = defineProps<IAppInputProps>()
const inputWrapRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLElement | null>(null)

const isFocusedInput = ref(false)
</script>
