<template>
    <div class="flex h-[40px] relative">
        <button
            v-for="(item, idx) in props.items"
            class="w-1/2 px-2 py-1 flex items-center justify-center flex-nowrap border-2 rounded-full"
            :class="{
                'border-black text-black': activeIndex === idx,
                'border-transparent text-neutral-500': activeIndex !== idx,
                'left-0': idx === 0,
                'right-0': idx === 1,
            }"
            @click="activeIndex = idx; emit('click', item.name)"
        >
            <component 
                :is="findIcon(item.icon)"
                class="mr-1"
                :class="{
                    'w-[20px] h-[20px]': item.icon !== 'checkList',
                    'w-[30px] h-[30px]': item.icon === 'checkList'
                }"
            />
            <span class="whitespace-nowrap font-bold">{{ item.title }}</span>
        </button>
        <div class="w-full h-full absolute top-0 left-0 border-2 border-neutral-300 rounded-full -z-10"></div>
    </div>
</template>

<script setup lang="ts">
import { IAppToogleButtonProps } from '@/types'

const props = defineProps<IAppToogleButtonProps>()
const emit = defineEmits(['click'])

const icons = {
    store: resolveComponent('IconsIconStore'),
    checkList: resolveComponent('IconsIconCheckList'),
}
const activeIndex = ref(0)

const findIcon = (iconName: string) => {
    switch (iconName) {
        case 'store':
            return icons.store
        case 'checkList':
            return icons.checkList
        default:
            return icons.store
    }
}
</script>
