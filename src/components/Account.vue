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
      User Name: {{ logedInUserData!.Name }}
      <br />
      Age: {{ logedInUserData!.Age }}
      <br />
      Gender: {{ logedInUserData!.Gender }}
      <br />
      Passwort: {{ logedInUserData!.Passwort }}
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserType, users, logedInUserID } from '../userInformation';

// import { logedInUserID } from '../userInformation';

// let localUsers = JSON.parse(localStorage.getItem('LocalUsers')!); // das darf ich ja leider net :(
// let localUserList = localStorage.getItem('LocalUserList');
let logedInUserData = ref<UserType>();

// if (localUserList  /*!== null*/) {
//   localUserList = JSON.parse(localUserList);
//   logedInUserData = JSON.parse(localUserList!).find(user => user.Email === input);
//   console.log(localUserList);
// }

if (users) {
  logedInUserData.value = users.value.find(user => user.ID === logedInUserID.value);
}

// localUserList.find(user => user.Email === input);
// >(localUserList.find(user => user.Email === input));

// console.log(logedInUserData.value);
/*
if (typeof localUserList === 'string') {
  localUserList = JSON.parse(localUserList);
  if (localUserList !== null) {
    let logedInUserData = ref<Array<[]>>(localUserList.find(user => user.Email === input));
  }
}
*/
</script>
