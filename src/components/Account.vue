<template>
  <div
    style="
      border: 1px solid #213547;
      background-color: whitesmoke;
      border-radius: 30px;
      text-align: center;
      width: 500px;
      height: 400px;
      font-size: larger;
      text-align: left;
    "
  >
    <h2 style="text-align: center">Account</h2>
    <div style="margin-left: 20px">
      <br />
      User Name: {{ users.filter(user => user.ID === logedInUserID) }}
      <br />
      Age:
      <br />
      Gender:
      <br />
      Passwort:
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { users, logedInUserID } from '../userInformation';
</script>
