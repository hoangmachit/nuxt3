<template>
  <TheSEO :seo="seo" />
  <div>
    <h1>About Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis
      alias deserunt eos atque modi quidem maxime commodi! Illo assumenda
      necessitatibus consectetur vel quasi dicta ullam fugiat quaerat itaque
      est.
    </p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
const seo = {
  title: "About",
  keyword: "Keyword on About",
  description: "Description on About",
};
const { data } = useFetch("/api/hello/hoangmach");
</script>