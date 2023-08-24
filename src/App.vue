<template>
  <div style="margin-top: 120px">
    <img class="logo" src="SportButler_Logo_Smal_White.png" style="width: 50px; position: absolute; top: 10px; left: 120px; height: auto" />
    <div class="header">
      <table>
        <td>
          <tr>
            <a id="Home" @click="route = 'home'">Home</a>
            <a id="Form" @click="route = 'form'">Form</a>
            <a id="Login" @click="route = 'login'">Login</a>
          </tr>
        </td>
        <a class="acc" id="Profile" @click="route = 'profile'">👤</a>
      </table>
    </div>
    <img class="headImage" src="background.png" />
    <div v-if="route === 'home'">
      <Home></Home>
    </div>
    <div v-else-if="route === 'form'">
      <Form></Form>
    </div>
    <div v-else-if="route === 'login'">
      <Login></Login>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Form from './components/Form.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
const route = ref('home');
</script>

<style scoped>
.header {
  position: absolute;
  left: 60%;
  top: 0%;
  color: whitesmoke;
  float: left;
  padding: 14px 16px;
  font-size: 17px;
  margin: 0;
}
a {
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
a:hover {
  /* background-color: #172531; */
  /* background-color: #213547; */
  background-color: #2a455c;
  user-select: none;
}
.acc {
  border-radius: 30px;
  border: 1px solid white;
  background-color: #424242;
}
</style>
