<template>
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
console.log("check 1");
definePageMeta({
  layout: "empty",
  middleware: ["auth-demo"],
});
console.log("check 2");
</script>