<template>
    <div class="mt-1 p-1 absolute top-full w-full min-w-[200px] bg-white rounded-xl">
        <div class="flex flex-col rounded-xl">
            <div class="px-3 py-2 flex items-center justify-between text-[13px] leading-4 font-semibold">
                <span class="">Больше интересного</span>
                <button type="button" class="text-[#547dff] hover:text-[#2754e5] bg-transparent">Еще больше</button>
            </div>
            <ul class="flex flex-col">
                <li class="h-10 w-full px-3 flex items-center hover:bg-[#f4f4f5] cursor-pointer text-[13px] leading-4 font-medium text-[#18181b] ">
                    <span class="w-full text-ellipsis overflow-hidden whitespace-nowrap">
                        asdfasdf slfjsjgdslj alskdjgasjglgsg hdagsal jlasdjg sdlkgjsgjdalkgjsl 2
                    </span>
                </li>
                <!-- <li
                v-for="(item, idx) in results"
                :key="idx"
                class="pl-2.5 pr-6 text-lg leading-8 text-[#222] cursor-default focus:bg-black/5"
                :class="{
                    'bg-black/5': Number(idx) === activeResultId,
                    'bg-transparent': Number(idx) !== activeResultId,
                }"
                @mouseenter="$emit('resultItemMoseenter', Number(idx))"
                @mouseleave="$emit('resultItemMouseleave')"
                @click.stop="$emit('resultClick')"
            >
                <div class="h-[30px] flex items-center">
                    <IconSearch class="w-[20px] h-[20px] mr-2" />
                    <p class="select-none truncate">
                        {{ item.value }}<b class="font-medium">{{ item.similar }}</b>
                    </p>
                </div>
            </li> -->
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

defineProps({
    results: {
        type: Array as PropType<Array<object>>,
        default: () => [],
    },
    activeResultId: {
        type: Number as PropType<number | null>,
        default: null,
    },
})
defineEmits(['resultItemMoseenter', 'resultItemMouseleave', 'resultClick'])

const isShowModalPrediction = ref(false)
</script>
