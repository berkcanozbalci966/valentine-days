<script setup>
import EnterPassword from "@/components/EnterPassword.vue";
const payload = {
  title: "5) Emin adımlarla ilerliyorsun, Tebrikler!11!!!",
  subTitle: "Güzel ilerledin. Bakalım bitişi görebilecek misin? '3530685'",
  navigateTo: "/level969696",
  password: "Nino",
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
