<script setup>
import { ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useRouter } from "vue-router";
const x = ref("YEZZZZ");
const router = useRouter();

function click() {
  router.push("/5667");
}
</script>

<template>
  <div>
    <h1>4. seviye mi ciddi misin?</h1>
    <h2>Güzel ilerledin. Tebrikler bakalım bitişi görebilecek misin?</h2>

    <div style="display: flex; justify-content: center">
      <div
        style="
          max-width: 400px;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        "
      >
        <button
          class="button-19"
          style="margin-right: 15px"
          @click="click('yes')"
        >
          Evet görürüm!
        </button>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: "Lobster", cursive;
}
h2 {
  font-family: "Rowdies", cursive;
  color: #fad390;
}

/* CSS */
.button-19 {
  appearance: button;
  background-color: #1899d6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: #1cb0f6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}
.red-button {
  background-color: #eb2f06 !important;
}
.red-button:after {
  background-color: #eb2f06 !important;
}
</style>
