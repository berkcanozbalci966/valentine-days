<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Swal from "sweetalert2/dist/sweetalert2.js";
const inputValue = ref("");
const router = useRouter();

function onChange() {
  if (inputValue.value == "77") {
    Swal.fire({
      title: "Tebrikler",
      text: "Gizli, saklı çitrefilli bir şifreyi çözdün.",
      icon: "success",
      confirmButtonText: "Eforsuz bi şekilde üstesinden geldim haha bu ne ki?",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/level3666");
      }
    });
  }
}
</script>

<template>
  <div>
    <h1>2) Vaow Level atladın, Tebrikler!</h1>
    <h2>
      Şimdi modemi kaldırıp altında ki kağıdı dikkatlice oku. Yapman gereken
      talimatlar içinde.
    </h2>
    <div style="display: flex; justify-content: center">
      <div class="demo-flex-spacer"></div>

      <div class="webflow-style-input">
        <input
          v-model="inputValue"
          class=""
          type="email"
          placeholder="Şifreyi gir."
          @keyup="onChange"
        />
        <button type="submit">
          <i class="icon ion-android-arrow-forward"></i>
        </button>
      </div>

      <div class="demo-flex-spacer"></div>
    </div>
  </div>
</template>

<style scoped>
html {
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

a {
  text-decoration: none;
}

input {
  border-style: none;
  background: transparent;
  outline: none;
  border-radius: 20px;
}

button {
  padding: 0;
  background: none;
  border: none;
  outline: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-image: radial-gradient(
    circle at 0% 0%,
    #373b52,
    #252736 51%,
    #1d1e26
  );
}

h1.demo {
  text-align: center;
  font-size: 2.4rem;
  font-weight: normal;
  margin-bottom: 1rem;
  color: #f5f6ff;
}

a.demo {
  text-align: center;
  font-size: 1.6rem;
  font-weight: normal;
  color: rgba(202, 205, 239, 0.8);
  margin-bottom: 3rem;
}

.demo-flex-spacer {
  flex-grow: 1;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.webflow-style-input {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 1.4rem 2rem 1.6rem;
  background: rgba(57, 63, 84, 0.8);
}
.webflow-style-input:after {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  height: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-position: 0% 0%;
  background: linear-gradient(
    to right,
    #b294ff,
    #57e6e6,
    #feffb8,
    #57e6e6,
    #b294ff,
    #57e6e6
  );
  background-size: 500% auto;
  -webkit-animation: gradient 3s linear infinite;
  animation: gradient 3s linear infinite;
}

.webflow-style-input input {
  flex-grow: 1;
  color: #bfd2ff;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
}
.webflow-style-input input::-webkit-input-placeholder {
  color: #7881a1;
}

.webflow-style-input button {
  color: #7881a1;
  font-size: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color 0.25s;
}
.webflow-style-input button:hover {
  color: #bfd2ff;
}
</style>
