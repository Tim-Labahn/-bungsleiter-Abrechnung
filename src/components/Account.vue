<template>
  {{ loadUserData() }}
  <div v-if="logedInUserID">
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
        <p style="margin-left: 10px">Stats ⚙️</p>
        <p @click="logOutUser = true" style="margin-left: 10px">Logout ⚙️</p>
      </div>

      <div v-if="logOutUser">
        <div
          style="
            border: 1px solid #213547;
            background-color: whitesmoke;
            border-radius: 30px;
            text-align: center;
            width: 600px;
            height: 200px;
            font-size: larger;
            position: absolute;
            margin-top: 100px;
            margin-left: -50px;
          "
        >
          <h2 style="text-align: center">Abmelden</h2>
          <div>Sind sie sicher das sie sich abmelden wollen?</div>

          <button style="border-radius: 5px; background-color: whitesmoke" @click="logedInUserID = undefined">Abmelden</button>
          <button style="margin-left: 50px; border-radius: 5px; background-color: whitesmoke" @click="logOutUser = false">Abbrechen</button>
        </div>
      </div>

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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserType, users, logedInUserID } from '../userInformation';
let logOutUser = ref(false);
let logedInUserData = ref<UserType>();
function loadUserData() {
  logedInUserData.value = users.value.find(user => user.ID === logedInUserID.value);
}
</script>
