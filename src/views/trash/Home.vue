<template>
  <div>Home Page</div>
</template>

<script>
// import { defineComponent } from "vue";
// import QrCapture from "../components/QrCapture.vue";
// import QrStream from "../components/QrStream.vue";
// import QrDropzone from "../components/QrDropzone.vue";
export default defineComponent({
  name: "App",
  components: {
    QrCapture,
    QrStream,
    QrDropzone,
  },
});
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #111827;
  margin: 0;
  padding: 0;
}
.camera {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
}
</style>
