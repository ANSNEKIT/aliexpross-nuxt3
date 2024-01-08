<template>
    <BaseAppContainer>
        <div
            id="topHeader"
            class="mt-2.5 sticky top-0 left-auto right-auto flex items-center justify-center z-30"
        >
            <div class="w-full relative bg-white border border-[#de2622] rounded-md">
                <header
                    class="w-full p-2 flex flex-row items-center justify-between bg-[#fe2722] border border-[#fe2722] rounded-md"
                    :class="{ 'h-[56px]': isTablet, 'h-[70px]': !isTablet }"
                >
                    <div
                        class="max-w-[calc(36%+4px)] ml-3.5"
                        :class="{ 'w-full': isTablet, 'w-[306px]': !isTablet }"
                    >
                        <router-link to="/">
                            <img
                                class="h-full"
                                :class="{ 'min-w-[87px]': isTablet, 'min-w-[120px]': !isTablet }"
                                src="~/assets/img/logo.svg"
                                :width="isTablet ? 87 : 120"
                                alt="aliexpress link"
                            />
                        </router-link>
                    </div>
                    <div class="flex flex-1 items-center">
                        <nav class="mr-2">
                            <ul class="flex items-center gap-1">
                                <li
                                    class="text-white"
                                    :class="{ 'w-9 h-9': isTablet, 'w-14 h-14': !isTablet }"
                                >
                                    <RouterLink to="/">
                                        <HeaderButton
                                            icon-name="Category"
                                            :is-show-text="!isTablet"
                                            :icon-classes="isTablet ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'"
                                        >Каталог</HeaderButton>
                                    </RouterLink>
                                </li>
                            </ul>
                        </nav>
                        <SearchTheSearch :class="{ 'h-[52px]': !isTablet, 'h-[38px]': isTablet }" />
                        <nav class="ml-2">
                            <ul class="flex items-center gap-1">
                                <li
                                    v-for="(btn, idx) in rightBarButtons"
                                    :key="btn.iconName + idx"
                                    class="text-white"
                                    :class="{ 'w-9 h-9': isTablet, 'w-14 h-14': !isTablet }"
                                >
                                    <RouterLink v-if="btn.url" :to="btn.url">
                                        <HeaderButton
                                            :icon-name="btn.iconName"
                                            :is-show-text="!isTablet"
                                            :icon-classes="btn.iconClasses"
                                        >{{ btn.text }}</HeaderButton>
                                    </RouterLink>
                                    <HeaderButton
                                            v-else
                                            :icon-name="btn.iconName"
                                            :is-show-text="!isTablet"
                                            :icon-classes="btn.iconClasses"
                                            @click="onClickHeaderButton(btn.code)"
                                    >{{ btn.text }}</HeaderButton>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

            <Teleport to="body">
                <ModalsLoginModal v-if="isShowLoginModal" @close-modal="isShowLoginModal = false" />
            </Teleport>
        </div>
    </BaseAppContainer>
</template>

<script setup lang="ts">
import { useStore } from "~/stores/main";
import { Icons } from "~/types";

const mainStore = useStore();

const isTablet = computed(() => mainStore.isTabletScreen)
const isShowLoginModal = ref(true)
const rightBarButtons = computed(() => [
    {
        text: 'Заказы',
        code: "orders",
        iconName: 'Order' as Icons,
        iconClasses: isTablet.value ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]',
        isShowText: !isTablet.value,
        url: '/',
    },
    {
        text: 'Корзина',
        code: "basket",
        iconName: 'Shopcart' as Icons,
        iconClasses: isTablet.value ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]',
        isShowText: !isTablet.value,
        url: '/shopcart/detail',
    },
    {
        text: 'Войти',
        code: "login",
        iconName: 'Login' as Icons,
        iconClasses: isTablet.value ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]',
        isShowText: !isTablet.value,
        url: null,
    },
])
// const goToPage = async (url = '/') => {
//     await navigateTo({ path: url})
// }
const onClickHeaderButton = (btnCode: string) => {
    if (btnCode === 'login') {
        isShowLoginModal.value = true;
    }
}
</script>