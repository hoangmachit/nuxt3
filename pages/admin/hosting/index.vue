<template>
  <h1>Hosting Page</h1>

  <button v-on:click="openModal()" type="button" class="btn btn-default">
    button {{ showModal }}
  </button>
  <ModalAdminHosting v-if="showModal" close="closeModal()" />
</template>
<script setup>
definePageMeta({
  layout: "admin",
});
</script>
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal;
      console.log("showModal", this.showModal);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  created() {
    console.log("showModal", this.showModal);
  },
};
</script>
