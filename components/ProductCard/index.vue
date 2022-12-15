<template lang="">
    <div class="border border-primary p-2 rounded-2">
        <div class="thumbs">
          <NuxtLink :to="`/products/${item.id}`" :title="item.title">
            <img :src="item.image" :alt="item.title" />
          </NuxtLink>
          <p class="category">
            <span class="badge">{{ item.category }}</span>
          </p>
        </div>
        <div class="info">
          <h3>
            <NuxtLink :to="`/products/${item.id}`" :title="item.title">{{
              item.title
            }}</NuxtLink>
          </h3>
          <p>{{ item.description }}</p>

          <p><b>Price</b>: $<span class="bold">{{ item.price }}</span></p>
        </div>
        <div class="add-to-cart d-flex justify-content-between align-items-center">
          <button class="btn btn-info">Add to cart</button>
          <NuxtLink :to="`/products/${item.id}`" :title="item.title" class="text-decoration-none">
          <span class="btn btn-success">View detail</span>
          </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const { item } = defineProps(["item"]);
</script>