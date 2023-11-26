<template>
    <div class="inline-flex items-center">
        <span v-for="(_, idx) in 5" :key="idx" class="relative text-neutral-200 mr-0.5">
            <span v-if="idx + 1 === 5" class="absolute t-0 l-0 w-1/2 z-20 text-red-500 overflow-hidden">
                <IconsIconStar :class="`w-[${size}px] h-[${size}px]`" />
            </span>
            <IconsIconStar 
                :class="[
                    `w-[${size}px] h-[${size}px]`, 
                    idx + 1 < props.rating ? 'text-red-500': 'text-neutral-200'
                ]"
            />
        </span>
        <div class="flex gap-2 ml-2 text-[#2964c5] text-[15px] leading-4 whitespace-nowrap">
            <RouterLink to="/">{{ props.rating ?? '' }}</RouterLink>
            <RouterLink v-if="props.reviews" to="/">({{ props.reviews }} отзыва)</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IAppRatingProps } from '@/types'
const props = defineProps<IAppRatingProps>()

</script>

<style scoped>

</style>