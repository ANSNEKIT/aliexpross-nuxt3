<template>
    <div>
        <div class="flex gap-2 text-[15px] leading-4 mb-1">
            <span>{{ item.groupName }}:</span>
            <span>{{ value ? value.title : "" }}</span>
        </div>
        <ul class="flex gap-1">
            <li 
                v-for="(el, idx) in item.elements"
                :key="el.id"
            >
                <button 
                    v-if="item.type === 'images' && el.imgUrl"
                    class="p-0.5 rounded-xl border border-transparent"
                    :class="{'!border-black': el.id === value?.id}"
                    @click="value = el"
                >
                    <picture>
                        <img class="min-w-9 min-h-9 w-9 h-9 rounded-xl" :src="el.imgUrl" :alt="el.title">
                    </picture>
                </button>
                <button
                    v-else
                    class="p-1.5 rounded-lg border border-neutral-300 text-[14px] leading-4 hover:shadow-inner hover:shadow-slate-300"
                    :class="{'bg-black text-white hover:!shadow-none': el.id === value?.id}"
                    @click="value = el"
                >{{ el.title }}</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ISkuItemProps, ISkuElement, IElementImage } from '@/types'

const props = defineProps<ISkuItemProps>()
const item = computed(() => props.item)
const value = ref<IElementImage | ISkuElement | null>(null);

onMounted(() => {
    if (item.value.elements.length > 0) {
        value.value = item.value.elements[0]
    }
})
watch(item, (val) => {
    if (val) {
        value.value = val.elements[0];
    }
})
</script>