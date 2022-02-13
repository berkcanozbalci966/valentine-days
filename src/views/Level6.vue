<script setup>
import EnterPassword from "@/components/EnterPassword.vue";
const payload = {
  title: "6) Neredeyse bitti",
  subTitle:
    "Sen neymişsin yauv, yüzdün yüzden nereye geldin peki son yönlendirmeyi yapayım. '3114645'",
  navigateTo: "/level777777",
  password: "kalp kalbe karşı çiçeği",
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
