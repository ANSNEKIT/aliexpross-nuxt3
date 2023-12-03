<template>
    <div class="inline-flex items-center">
        <span v-for="(_, idx) in 5" :key="idx" class="relative text-neutral-200 mr-0.5">
            <span v-if="idx + 1 === 5" class="absolute t-0 l-0 w-1/2 z-20 text-red-500 overflow-hidden">
                <IconsIconStar :class="sizeClasses" />
            </span>
            <IconsIconStar 
                :class="[
                    sizeClasses, 
                    idx + 1 < rating ? 'text-red-500': 'text-neutral-200',
                ]"
            />
        </span>
        <div class="flex gap-2 ml-2 text-[#2964c5] text-[15px] leading-4 whitespace-nowrap">
            <RouterLink to="/">{{ rating ?? '' }}</RouterLink>
            <RouterLink v-if="reviews" to="/">({{ reviews }} отзыва)</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IRating } from '@/types'

const props = defineProps<IRating>()
const { rating, size, reviews } = toRefs(props)
const sizeVariants: {[index: number]: string} = {
    14: 'w-[16px] h-[16px]',
    16: 'w-[16px] h-[16px]',
    20: 'w-[16px] h-[16px]',
}
const sizeClasses = computed(() => sizeVariants[size.value])
</script>