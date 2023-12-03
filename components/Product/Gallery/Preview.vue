<template>
    <div class="w-[56px] flex flex-col gap-0.5 mr-2">
        <div 
            v-for="(item, idx) in items"
            :key="item.id"
            class="w-[56px] h-[56px] min-w-[56px] min-h-[56px] p-0.5 relative cursor-pointer overflow-hidden rounded-xl "
            :class="{'border-2 border-[#222]': idx === activeIdx}"
        >
            <picture>
                <img class="rounded-lg" :src="item.imgUrl" :alt="item.title">
            </picture>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductGalleryPreviewProps } from '@/types'

const props = defineProps<IProductGalleryPreviewProps>()
const items = computed(() => props.items)
const activeIdx = 0
</script>

<style scoped>

</style>