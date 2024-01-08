
<template>
    <BaseAppModal
        is-show-button-close
        title="Войдите в аккаунт"
        @close-modal="emit('closeModal', true)"
    >
        <form class="w-full" @sumit="onSubmit">
            <div class="mb-8">
                <BaseAppInput :input-classes="['h-[58px]']">Почта или телефон</BaseAppInput>
            </div>
            <BaseAppButton class="w-full mb-8 py-3 bg-[#d03a1e] text-white font-bold text-base rounded-full 
            hover:bg-[#fa5b3f]">Продолжить</BaseAppButton>
            <p class="text-xs text-center text-neutral-600 mb-3">Или продолжите через</p>
            <div class="flex items-center justify-center gap-2 mb-7">
                <BaseAppButton
                    v-for="(icon, index) of icons"
                    :key="index"
                    class="w-[56px] h-[56px] flex items-center justify-center bg-neutral-200 rounded-full hover:bg-neutral-300"
                >
                    <img
                        :src="icon.url"
                        :alt="icon.title"
                        class="w-[28px] h-[28px]"
                    />
                </BaseAppButton>
            </div>
            <hr class="w-full h-0 bg-neutral-300 mb-7">
            <BaseAppButton class="w-full mb-4 py-3.5 bg-neutral-300 text-neutral-900 font-bold text-[20px] leading-[24px] rounded-full hover:bg-neutral-400">Создать аккаунт</BaseAppButton>
            <div class="flex justify-center mb-4">
                <NuxtLink to="/" class="underline font-bold text-[14px] leading-4">Нужна помощь?</NuxtLink>
            </div>
            <p class="text-center text-[12px] leading-4 text-neutral-600">
                Используя этот сайт, вы автоматически создаете или используете имеющуюся учетную запись на AliExpress, соглашаетесь на обработку персональных данных и принимаете условия <br>
                <NuxtLink to="/" class="underline">Пользовательских соглашений AliExpress</NuxtLink>&nbsp;
                <NuxtLink to="/" class="underline">Подробнее</NuxtLink>
            </p>
        </form>
    </BaseAppModal>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeModal'])

const icons = [
    {
        url: "https://source.unsplash.com/random/60x60?sig=1",
        title: "image 1",
    },
    {
        url: "https://source.unsplash.com/random/60x60?sig=2",
        title: "image 2",
    },
    {
        url: "https://source.unsplash.com/random/60x60?sig=3",
        title: "image 3",
    },
    {
        url: "https://source.unsplash.com/random/60x60?sig=4",
        title: "image 4",
    },
]

const onSubmit = () => {
    console.log('onSubmit');
    
}

</script>
