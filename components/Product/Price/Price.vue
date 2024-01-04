

<template>
    <div class="flex column gap-3">
        <ProductPriceBasketBlock :item="basketBlock" />
    </div>
</template>

<script setup lang="ts">
import { IProductPrice } from '@/types'

const basketBlock: IProductPrice = {
    id: 'price-block1',
    price: 9876,
    oldPrice: 123456,
    percentDiscount: 78,
    isCoupon: true,
    limitedCount: 1000,
}
</script>

<style scoped>

</style>