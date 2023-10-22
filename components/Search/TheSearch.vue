<template>
    <form class="relative flex w-full">
        <SearchTheSearchInput class="z-30" />
        <template class="" v-if="isOpenResults">
            <teleport to="body">
                <AppShadow opacity="0.2" @click="onClose" />
            </teleport>
            <SearchTheSearchResults class="z-30" />
        </template>
    </form>
</template>

<script setup lang="ts">
const isOpenResults = ref(false);
const onClose = () => isOpenResults.value = false;
</script>
