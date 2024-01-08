<template>
    <button class="w-full h-full relative z-30 flex flex-col justify-center items-center">
        <ClientOnly>
            <component :is="IconComponent" :class="props.iconClasses" />
        </ClientOnly>
        
        <span v-if="'default' in $slots && isShowText" class="text-white text-[11px] leading-3">
            <slot />
        </span>
        <span v-if="isShowCount" class="absolute top-0 right-0 py-[1px] px-1 flex items-center justify-center text-white text-[12px] bg-black rounded-md">0</span>
    </button>
</template>

<script setup lang="ts">
import { IHeaderButton } from '@/types';

const props = defineProps<IHeaderButton>()
const { iconName } = toRefs(props)
const IconCategory = resolveComponent("IconsIconCategory")
const IconOder = resolveComponent("IconsIconOrder")
const IconShopcart = resolveComponent("IconsIconShopcart")
const IconLogin = resolveComponent("IconsIconLogin")
const icons = { 'Order': IconOder, 'Login': IconLogin, 'Shopcart': IconShopcart, 'Category': IconCategory }

const IconComponent = computed(() => icons[iconName.value])
</script>
