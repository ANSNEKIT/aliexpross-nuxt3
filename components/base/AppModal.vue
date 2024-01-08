<template>
    <div
        ref="modalRef"
        role="dialog"
        class="max-h-fit fixed flex justify-center items-center inset-0 z-50 focus:outline-none"
        @keydown.esc="onClose"
    >
        <BaseAppShadow v-if="isOpen" opacity="60" @click="onClose" />
        <div
            v-if="isOpen"
            class="my-8 p-5 flex flex-col relative z-50 bg-white w-full sm:w-2/3 max-w-md rounded-3xl"
            style="max-height: calc(100vh - 64px)"
        >
            <div id="header" class="flex w-full items-start">
                <h1 v-if="title" class="mt-10 mb-6 flex-1 font-bold text-[32px] leading-9">{{ title }}</h1>

                <BaseAppButton
                    v-if="isShowButtonClose"
                    class="m-0"
                    @click="onClose"
                >
                    <IconsIconClose stroke-width="1" class="w-[40px] h-[40px] text-[#333]" />
                </BaseAppButton>
            </div>
            <div class="overflow-auto pr-2">
                <slot />
            </div>
            <div v-if="$slots.footer" class="py-2 flex justify-end items-center">
                <slot name="footer" :close="onClose" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IAppModalProps } from '~/types';

defineProps<IAppModalProps>()
const emit = defineEmits(['closeModal'])

const isOpen = ref(true)
const modalRef = ref<HTMLElement | null>(null)

onMounted(() => {
    modalRef.value?.focus()
})

const onClose = () => {
    isOpen.value = false

    emit('closeModal')
}
</script>
