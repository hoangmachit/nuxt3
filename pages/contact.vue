<template>
  <TheSEO :seo="seo" />
  <div>
    <h1>Contact Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis
      alias deserunt eos atque modi quidem maxime commodi! Illo assumenda
      necessitatibus consectetur vel quasi dicta ullam fugiat quaerat itaque
      est.
    </p>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "empty",
  middleware: ["auth-demo"],
});
const seo = {
  title: "Contact",
  keyword: "Keyword on Contact",
  description: "Description on Contact",
};
</script>