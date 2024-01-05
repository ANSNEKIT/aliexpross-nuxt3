<template>
    <BaseAppContainer>
        <div class="h-9 flex items-center justify-between mb-1">
            <ul class="h-[32px] flex gap-1">
                <li class="bg-[#FFE500] text-black font-bold text-[13px] leading-4 uppercase tracking-tight rounded-md">
                    <RouterLink
                        to="/"
                        class="block px-2 py-1.5"
                    >Октоберфест</RouterLink>
                </li>
                <li class="bg-[#f0f4f7] text-black text-[13px] leading-4 uppercase tracking-tightter rounded-md">
                    <RouterLink
                        to="/"
                        class="block px-2 py-1.5"
                    >
                        <img
                            src="~/assets/img/fire.svg"
                            class=""
                            width="16"
                            height="17"
                            alt="hot sale icon"
                        >
                    </RouterLink>
                </li>
                <li class="bg-[#f0f4f7] text-black text-[13px] leading-4 tracking-tight rounded-md">
                    <RouterLink
                        to="/"
                        class="block px-2 py-1.5"
                    >
                        По 185 &#x20bd;
                    </RouterLink>
                </li>
            </ul>
            <div class="h-[32px] flex gap-1">
                <button
                    class="flex items-center p-2 rounded-md bg-white border border-[rgb(205,213,223)] text-[13px] leading-4 hover:bg-[#eef2f6]"
                >
                    <span class="mr-1"><img
                            src="~/assets/img/pin.svg"
                            width="16"
                            height="16"
                            alt="pin icon"
                        ></span>
                    Волгоград</button>
                <button
                    class="flex items-center p-2 rounded-md bg-white border border-[rgb(205,213,223)] text-[13px] uppercase leading-4 hover:bg-[#eef2f6]"
                >
                    Ru</button>
                <button
                    class="flex items-center p-2 rounded-md bg-white border border-[rgb(205,213,223)] text-[13px] uppercase leading-4 hover:bg-[#eef2f6] disabled:bg-[#eef2f6] border-none"
                    disabled
                >
                    Rub</button>
            </div>
        </div>
    </BaseAppContainer>
</template>

<script setup lang="ts">

</script>
