<template>
    <div
        id="topHeader"
        class="max-w-[1280px] px-7 mt-2.5 mx-auto sticky top-0 left-auto right-auto flex items-center justify-center z-10"
    >
        <div class="w-full relative bg-white border border-white rounded-md">
            <header class="w-full h-[70px] flex flex-row items-center justify-between bg-[#fe2722] border border-[#fe2722] rounded-md p-2">
                <div class="w-[300px] ml-4">
                    <router-link to="/">
                        <img class="" src="/img/logo.svg" width="120" alt="aliexpress link" />
                    </router-link>
                </div>
                <div class="w-full h-full flex items-center">
                    <form class="flex flex-1 h-full">
                        <AppInput />
                    </form>
                    <nav class="ml-2">
                        <ul class="flex items-center gap-1">
                            <li class="text-white">
                                <HeaderButton />
                            </li>
                            <li class="text-white">
                                <HeaderButton />
                            </li>
                            <li class="text-white">
                                <HeaderButton />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>