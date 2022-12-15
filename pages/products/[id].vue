<template>
  <div class="d-flex justify-content-center align-items-center">
    <TheSEO
      :seo="{
        title: product.title,
        keyword: product.description,
        description: product.description,
      }"
    />
    <div class="product-detail">
      <div class="thumbs-detail">
        <figure>
          <img :src="product.image" :alt="product.title" />
        </figure>
      </div>
      <p>
        <span class="badge">{{ product.category }}</span>
      </p>
      <h1>{{ product.title }} ID = {{ product.id }}</h1>
      <p>
        {{ product.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
const route = useRoute();
const { id } = route.params;
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: product } = await useFetch(uri);
</script>
<style scope>
.product-detail {
  max-width: 500px;
}
</style>