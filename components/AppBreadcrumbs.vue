<template>
    <AppContainer>
        <nav>
            <ul class="flex items-center gap-1">
                <template
                    v-for="(bread, idx) in items"
                    :key="bread.id"
                >
                    <li class="text-[14px] leading-4 tracking-tight text-neutral-700">
                        <RouterLink :to="bread.link">{{ bread.title }}</RouterLink>
                    </li>
                    <IconsIconArrowRight v-if="idx !== items.length - 1" class="w-5 h-5" />
                </template>
            </ul>
        </nav>
    </AppContainer>
</template>

<script setup lang="ts">
import { IBreadcrumbsProps } from "@/types";

const props = defineProps<IBreadcrumbsProps>()
const items = computed(() => props.items)
</script>

<style scoped>

</style>