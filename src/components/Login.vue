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
    "
  >
    <h1>SportButler</h1>
    <div v-if="loginStep === 0">
      <h3>Anmelden</h3>
      <p>Bitte ihre Email und password angeben</p>
      <form @submit.prevent="loginStep = 70">
        <div>
          <input v-model="userLoginEmail" id="Name" type="email" placeholder="Email" pattern=""  required />  
          
        </div>
        <div>
          <input v-model="userLoginPassword" type="password" placeholder="Password" required />
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
      <button @click="loginStep = 1" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Neuen Account erstellen</button>
    </div>
    <div v-if="loginStep === 1">
      <h3>SportButler-Konto ersellen</h3>
      <p>Bitte den Namen eingeben</p>
      <form @submit.prevent="loginStep = 2">
        <div>
          <input v-model="newuserName" id="Name" type="text" placeholder="Vorname" required />
        </div>
        <div>
          <input v-model="newuserLastName" type="text" placeholder="Nachname" required />
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
    <div v-if="loginStep === 2">
      <h3>Allgemeine Informationen</h3>
      <p>Geben Sie ihr Geburtsdatum und ihr geschlecht ein.</p>
      <form @submit.prevent="loginStep = 3">
        <div>
          <input v-model="newuserDay" type="number" placeholder="Tag" required />
          <select v-model="newuserMonth" id="age-Monat" required>
            <option value="">Monat</option>
            <option value="1">Januar</option>
            <option value="2">Februar</option>
            <option value="3">März</option>
            <option value="4">April</option>
            <option value="5">Mai</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <input v-model="newuserYear" type="number" placeholder="Jahr" required />
        </div>
        <div>
          <select v-model="newuserGender" id="gender" required>
            <option value="">Geschlecht</option>
            <option value="Male">Mänlich</option>
            <option value="Female">Weiblich</option>
            <option value="Divers">Divers</option>
          </select>
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
    <div v-if="loginStep === 3">
      <form @submit.prevent="loginStep = 4">
        <h3>Starkes Passwort erstllen</h3>
        <p>Bitte ein starkes password aus buchstaben, Zahlen und sonderzeichen erstllen</p>
        <div>
          <input v-model="newuserPasswort" id="Password" type="password" placeholder="Password" min="8" max="20" required />
        </div>
        <div>
          <input type="password" placeholder="Bestätiigen" required :pattern="newuserPasswort"/>
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
    <div v-if="loginStep === 4">
      <form @submit.prevent="loginStep = 5">
        <h3>Telefonnummer</h3>
        <p>Bestätigungscode an Ihr Smartphone senden</p>
        <div>
          <input v-model="newuserNummer" id="Number" type="number" placeholder="Telefonnummer" required />
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
    <div v-if="loginStep === 5">
      <form @submit.prevent="createUser(), (logedInUserID = newuserID)">
        <h3>E-Mail</h3>
        <p>Bitte bestätigen sie ihre Email</p>
        <div>
          <input v-model="newuserEMail" id="newuserEMail" type="email" placeholder="E-Mail" required />
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { users, logedInUserID } from '../userInformation';

const loginStep = ref(0);
const date =ref(new Date)
const userLoginEmail = ref('');
const userLoginPassword = ref('');

const newuserID = ref(+Math.random().toString().substring(2));
const newuserName = ref('');
const newuserLastName = ref('');
const newuserDay = ref<number>(0);
const newuserMonth = ref<number>(0);
const newuserYear = ref<number>(0);
const newuserAge = ref<number>( date.value.getFullYear()- newuserYear.value);
const newuserGender = ref('');
const newuserPasswort = ref<string>('');
const newuserNummer = ref<number>(0);
const newuserEMail = ref<string>('');

function createUser() {
  if (newuserYear.value< date.value.getFullYear() )
  users.value.push({
    ID: newuserID.value,
    Name: newuserName.value + '' + newuserLastName.value,
    Day: +newuserDay.value,
    Month: +newuserMonth.value ?? 0,
    Year: +newuserYear.value ?? 0,
    Age: +newuserAge.value ?? 0,
    Gender: newuserGender.value,
    Passwort: newuserPasswort.value ?? '',
    Email: newuserEMail.value ?? ''
  });
  localStorage.setItem("Users", JSON.stringify(users.value));
  console.log(localStorage.getItem("Users"));
}
</script>
