<template>
  <div style="border: 1px solid #213547; background-color: whitesmoke; border-radius: 30px; text-align: center">
    <div v-if="loginStep === 1">
      <h1>SportButler</h1>
      <h3>SportButler-Konto ersellen</h3>
      <p>Bitte den Namen eingeben</p>
      <form @submit.prevent="loginStep = 2">
        <div>
          <input type="text" placeholder="Vorname" required />
        </div>
        <div>
          <input type="text" placeholder="Nachname" required />
        </div>
        <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
      </form>
    </div>
    <div v-if="loginStep === 2">
      <h1>SportButler</h1>
      <h3>Allgemeine Informationen</h3>
      <p>Geben Sie ihr Geburtsdatum und ihr geschlecht ein.</p>
      <div>
        <input type="number" placeholder="Tag" required />
        <select id="age-Monat" required>
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
        <input type="number" placeholder="Jahr" required />
      </div>
      <div>
        <select id="gender" required>
          <option value="">Geschlecht</option>
          <option value="Male">Mänlich</option>
          <option value="Female">Weiblich</option>
          <option value="Divers">Divers</option>
        </select>
      </div>
      <button type="submit" style="background-color: #213547; color: whitesmoke; border-radius: 4px">Weiter</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const loginStep = ref(1);
</script>
