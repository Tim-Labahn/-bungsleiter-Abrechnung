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
      {{ reloadUsers() }}
      <br />
      User Name: 
      <br />
      Age:{{ users.find(user => user.ID === logedInUserID)?.Name }}
      <br />
      Gender:{{ users.find(user => user.ID === logedInUserID)?.Gender }}
      <br />
      Passwort:{{ users.find(user => user.ID === logedInUserID)?.Passwort }}
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { users, logedInUserID, reloadUsers } from '../userInformation';

localStorage.setItem('Users', JSON.stringify(users.value));
let Users = JSON.parse(localStorage.getItem('Users')!);

let UserName= localStorage.getItem('Users')
// localStorage.getItem(key)

console.log(UserName);
</script>
