<template>
    <BaseAppContainer>
        <div
            ref="sliderWrapRef"
            class="bg-[#ffc6b4] p-3 rounded-xl"
            :style="{ maxWidth: isLg ? `${windowWidth}px` : '1321px' }"
        >
            <SliderHeader />
            <div class="relative">
                <SliderNavButton
                    v-if="isShowLeft"
                    class="left-0"
                    :left="true"
                    @nav-button-click="onLeft"
                >
                    <IconsIconArrowLeft
                        width="16"
                        height="16"
                        class="w-4.5 h-4.5"
                    />
                </SliderNavButton>

                <div
                    class="flex transition overflow-hidden whitespace-nowrap"
                >
                    <ul 
                        ref="sliderCardsRef"
                        class="flex gap-1"
                        :style="cardsTranslateStyle"
                    >
                        <SliderCard
                            v-for="(card, index) of 15"
                            :key="index"
                            :index="index"
                        />
                    </ul>
                </div>

                <SliderNavButton
                    v-if="isShowRight"
                    class="right-0"
                    :right="true"
                    @nav-button-click="onRight"
                >
                    <IconsIconArrowRight
                        width="16"
                        height="16"
                        class="w-4.5 h-4.5"
                    />
                </SliderNavButton>
            </div>
        </div>
    </BaseAppContainer>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/main';

const mainStore = useStore()
const isLg = computed(() => mainStore.isLgScreen)
const sliderWrapRef = ref<HTMLElement | null>(null)
const sliderCardsRef = ref<HTMLElement | null>(null)
const sliderWrapWidth = ref<number | null>(null)
const windowWidth = ref<number | null>(null);
const sliderCardsWidth = ref<number | null>(null)
const _navStepMax = ref(0)
const _navStep = ref(0)

const isShowRight = computed(() => _navStep.value < _navStepMax.value)
const isShowLeft = computed(() => _navStep.value !== 0)
const cardsTranslateStyle = computed(() => ({
    transform: `translateX(${0 - _navStep.value * 400}px)`,
}))

const onResize = () => {
    if (sliderWrapRef.value && sliderCardsRef.value) {
        windowWidth.value = window.innerWidth - 60
        sliderWrapWidth.value = sliderWrapRef.value.offsetWidth
        sliderCardsWidth.value = sliderCardsRef.value.offsetWidth
        
        _navStepMax.value = Math.ceil((sliderCardsWidth.value - sliderWrapWidth.value) / 400)
    }
};
const throttledResize = throttle(onResize, 60)
const onRight = () => {
    if (_navStep.value < _navStepMax.value) {
        _navStep.value += 1
    }
}
const onLeft = () => {
    if (_navStep.value > 0) {
        _navStep.value -= 1
    }
}

onMounted(() => {
    throttledResize()
    window.addEventListener('resize', throttledResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', throttledResize)
})
</script>
