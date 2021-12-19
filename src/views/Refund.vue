<template>
  <div>
    <div class="mb">Scan the QR CODE</div>
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
    </div>
    <div class="station">station : Florya</div>
    <div class="result">Result: {{ data }}</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { QrStream } from "vue3-qr-reader";
import VueAxios from "vue-axios";
import axios from "axios";
import Swal from "sweetalert2";
export default defineComponent({
  name: "refund",
  components: {
    QrStream,
  },
  setup() {
    const state = reactive({
      data: null,
    });
    function onDecode(data) {
      state.data = data;
      let end_station = 12;
      let json = { card: data, end_station_id: end_station };
      axios
        .post("http://127.0.0.1:8000/api/refund", json, {
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
          Swal.fire({
            icon: "success",
            title: response.data.msg,
            text: "YOUR BALANCE IS " + response.data.balance,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Somthing went wrong",
            text: error,
          });
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
