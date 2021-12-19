<template>
  <div>
    <div class="mb">Scan the QR CODE</div>
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
      <div>Station: Florya</div>
    </div>
    <div class="result">Result: {{ data }}</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { QrStream } from "vue3-qr-reader";
import VueAxios from "vue-axios";
import axios from "axios";
export default defineComponent({
  name: "bus",
  components: {
    QrStream,
  },
  setup() {
    const state = reactive({
      data: null,
    });
    function onDecode(data) {
      state.data = data;
      let start_station = 1;
      let end_station = 10;
      // alert(axios.post("http://127.0.0.1:8000/api/pass", data));
      let json = { data: data, station: station };
      axios
        .post("https://trabus-test.test/api/refund", json, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token, Authorization",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((response) => {
          alert(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          // console.log(JSON.stringify(error.message));
        });
    }
    return {
      ...toRefs(state),
      onDecode,
    };
  },
});
</script>

<style scoped>
.result,
.mb {
  color: #fff;
  width: 33%;
  margin: 0 auto;
}
</style>
