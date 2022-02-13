<script setup>
import EnterPassword from "@/components/EnterPassword.vue";
const payload = {
  title: "Her şeyin başladığı Yer Neresi?",
  navigateTo: "/Finish",
  password: "draft",
  swal: {
    title: "Tebrikler",
    icon: "success",
    confirmButtonText: "Devammm.",
  },
};
</script>

<template>
  <EnterPassword :payload="payload" />
</template>
