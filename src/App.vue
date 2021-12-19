<template>
  <div class="container" id="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/buspassing">Bus</router-link>
    <router-link class="link" to="/metrobuspassing">Metrobus</router-link>
    <router-link class="link" to="/refund">Refund Machine</router-link>
    <router-link class="link" to="/charging">Charging Machine</router-link>
    <router-link class="link" to="/new">New Card</router-link>
  </div>
  <router-view />
</template>
<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #111827;
  margin: 0;
  padding: 0;
  color: #fff;
}
.camera {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
}
.container {
  width: 90%;
  height: 20vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  height: 50px;
  width: 25%;
  text-decoration: none;
  background-color: #eee;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: #111827;
  font-weight: bolder;
  text-transform: uppercase;
}
</style>
