<template>
    <div class="w-full flex flex-col gap-8">
        <BasketItem
            v-for="item in props.items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script setup lang="ts">
import { IBasketItemsProps } from "@/types"

const props = defineProps<IBasketItemsProps>()
</script>
