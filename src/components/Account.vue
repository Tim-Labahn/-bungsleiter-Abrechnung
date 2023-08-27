<template>
  {{ loadUserData() }}
  <div>
    <div
      style="
        position: absolute;
        margin-left: -700px;
        margin-top: -250px;
        border: 1px solid #213547;
        background-color: whitesmoke;
        border-radius: 30px;
        width: 200px;
        height: 870px;
        font-size: larger;
        text-align: left;
      "
    >
      <p style="margin-left: 10px">Profil 👤</p>
      <p style="margin-left: 10px">Settings ⚙️</p>
      <p @click="logOutUser = true" style="margin-left: 10px">Logout ⚙️</p>

      <p style="margin-left: 10px">Stats ⚙️</p>
    </div>

    <div v-if="logedInUserID">
      <div v-if="logOutUser">
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
          <div>Are You Sure that you want to log out ?</div>
          <button @click="logedInUserID = undefined">Fortfahren</button>
          <button @click="logOutUser = false">Abbrechen</button>
        </div>
      </div>
      <div v-if="!logOutUser">
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
            User Name: {{ logedInUserData?.Name }}
            <br />
            Age: {{ logedInUserData?.Birthday.toString().substring(10, 8) }}. {{ logedInUserData?.Birthday.toString().substring(7, 5) }}.
            {{ logedInUserData?.Birthday.toString().substring(4, 0) }}
            <br />
            Gender: {{ logedInUserData?.Gender }}
            <br />
            Passwort: {{ logedInUserData?.Passwort }}
            <br />
          </div>
        </div>
      </div>
    </div>
    <div v-if="!logedInUserID">
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
          No User is loged in at the moment.
          <br />
          PLease log in to see the informatins of your account.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserType, users, logedInUserID } from '../userInformation';
let logOutUser = ref(false);
let logedInUserData = ref<UserType>();
function loadUserData() {
  logedInUserData.value = users.value.find(user => user.ID === logedInUserID.value);
}
// import { logedInUserID } from '../userInformation';

// let localUsers = JSON.parse(localStorage.getItem('LocalUsers')!); // das darf ich ja leider net :(
// let localUserList = localStorage.getItem('LocalUserList');

// if (localUserList  /*!== null*/) {
//   localUserList = JSON.parse(localUserList);
//   logedInUserData = JSON.parse(localUserList!).find(user => user.Email === input);
//   console.log(localUserList);
// }

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
