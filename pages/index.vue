<template>
  <div>
    <TheSEO :seo="seo" />
    <ul class="d-flex flex-wrap">
      <li
        v-for="item in products"
        v-bind:key="item.id"
        class="w-25 li-product p-5"
      >
        <ProductCard :item="item" />
      </li>
    </ul>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
const { data: products } = await useFetch("https://fakestoreapi.com/products");
const seo = {
  title: "Index Page 1",
  keyword: "Keyword Index Page 1",
  description: "Description Index Page 1",
};
</script>
<style scope>
ul {
  list-style: none;
}
.thumbs {
  position: relative;
  margin-bottom: 1rem;
}
.thumbs img {
  height: 400px;
  width: 100%;
  border-radius: 5px;
}
.thumbs .category {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 3;
}
</style>