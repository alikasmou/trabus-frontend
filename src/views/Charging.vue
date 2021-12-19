<template>
  <div>
    <div class="mb">Scan the QR CODE</div>
    <div class="center stream">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red" class="frame"></div>
      </qr-stream>
    </div>
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
  name: "charging",
  components: {
    QrStream,
  },
  setup() {
    const state = reactive({
      data: null,
    });
    function onDecode(data) {
      state.data = data;
      let machine = 1;
      let money = 50;
      // alert(axios.post("http://127.0.0.1:8000/api/pass", data));
      let json = { card: data, machine, money };
      axios
        .post("http://127.0.0.1:8000/api/charging", json, {
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
            title: "Success",
            text:
              "Charging Success, Your Money: " +
              response.data.money +
              "\n" +
              "Your Balance: " +
              response.data.card_balance,
            icon: "success",
            confirmButtonText: "OK",
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
