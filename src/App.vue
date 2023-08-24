<template>
  <div class="head"></div>
  <div class="formular">
    <p style="text-align: left" class="registered association">{{ registeredAssociation }}</p>
    <p style="font-size: 30px; text-align: center" class="ueberschrift">
      <b>Übungsleiter-Abrechnung</b>
      für den Zeitraum 01.07.{{ checkYear() }} bis 30.06.{{ checkYear() + 1 }}
    </p>
    <table class="headTable" style="border: 4px solid #213547; border-radius: 20px 20px 0px 0px; border-bottom: 0px; width: 100%">
      <tbody style="border-bottom: 4px solid #213547">
        <tr>
          <td colspan="2">
            <b>Vereinsname:</b>
            <input
              style="border: none; outline: none; border-bottom: 2px dotted #213547; width: 500px"
              type="text"
              placeholder="Musterman Sportverein e.V."
              required
            />
          </td>
          <td colspan="2">
            <b>Bankverbindung:</b>
            <input style="border: none; outline: none; border-bottom: 2px dotted #213547; width: 690px" type="text" placeholder="IBAN" />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <b>Ansprechpartner*in</b>
            (Name, E-Mail, Telefon):
            <input
              style="border: none; outline: none; border-bottom: 2px dotted #213547; width: 1200px"
              type="text"
              placeholder="Musterman | max.muster@mustermail.de | +49 4321 123456"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table class="bodyTable" style="border: 4px solid #213547; width: 100%">
      <thead style="text-align: left">
        <tr>
          <td>
            <b>Übungsleiter*in</b>
            <br />
            (alphabetisch) Name, Vorname
          </td>
          <td><b>Betreute Gruppe, Mannschaft*</b></td>
          <td>
            <b>Alter</b>
            der Übenden*
          </td>
          <td><b>Gesamtstunden*</b></td>
          <td>
            <button @click="addEmptyEntry()" type="button" class="NewLineButton">+</button>
            <button @click="entries = []" type="button" class="NewLineButton">↻</button>
          </td>
        </tr>
      </thead>
      <tbody v-for="(entry, index) in entries" :key="entry.id">
        <tr :class="entry">
          <td>
            <input type="text" placeholder="" required v-model="entry.uebungsleiter" />
          </td>
          <td>
            <input type="text" placeholder="" required v-model="entry.gruppe" />
          </td>
          <td>
            <select name="age" id="age-select" style="width: 100%" v-model="entry.alter">
              <option value="">--Please choose an option--</option>
              <option value="u18">Unter 18</option>
              <option value="ü18">Über 18</option>
            </select>
          </td>
          <td>
            <input type="number" required v-model="entry.stunden" @input="hoursTogether()" />
          </td>

          <td>
            <!-- <button @click="entries.pushs" type="button" class="confirm">✓</button> -->
            <button @click="entries.splice(index, 1)" type="button" class="DelLineButton">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="feetTable" style="border: 4px solid #213547; width: 100%">
      <tr>
        <td colspan="3" style="width: 63.5%">
          <p><b>* Reine Erwachsenengruppen/-stunden bitte seperat auflisten! (Extra-Zeile)</b></p>
        </td>
        <td>
          <b>Summe:</b>
        </td>
        <td>
          <input type="number" :value="hoursTogetherNumber" style="width: 73.5%" disabled />
        </td>
      </tr>
    </table>
  </div>
  <div>
    <p style="text-align: left; line-height: 1.1">
      Wir versichern, dass die angegebenen Übungsstunden tatsächlich von de angegebenen Übungsleiter*innen (frühestens mit dem Datum der
      Lizenzausstellung) geleistet wurden, dass die zu erwartenden Zuschüsse gemäß den
      <b>
        Richtlinien des Kreises Segeberg für die Gewährung von zuschüssen an Sportvereine im kreis Segeberg zur entschädigung anerkannter
        Übungsleiter*innen [...]
      </b>
      vom 11.02.2020 verwendet werden und an die Übungsleiter*innen ausgezahlt werden. die verwendung der zuschüsse können wir gegebenenfalls über
      Trainingspläne, auszahlungsbelege, arbeitsverträge und änlichesnachweisen.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const currentDate = new Date();
const registeredAssociation = ref('Kreissportverband Segeberg e.V');
const idNumber = ref(0);
const hoursTogetherNumber = ref(0);
const entries = ref<
  {
    uebungsleiter: string;
    sportArt: string;
    gruppe: string;
    alter: number;
    stunden: number;
    id: number;
  }[]
>([]);

function hoursTogether() {
  hoursTogetherNumber.value = 0;
  for (let i = 0; i < entries.value.length; i++) {
    hoursTogetherNumber.value += entries.value[i].stunden;
  }
}

function addEmptyEntry() {
  entries.value.push({ uebungsleiter: '', sportArt: '', gruppe: '', alter: 0, stunden: 0, id: idNumber.value });
  idNumber.value++;
}
addEmptyEntry();
function checkYear() {
  if (currentDate.getMonth() + 1 <= 7) {
    return currentDate.getFullYear() - 1;
  } else {
    return currentDate.getFullYear();
  }
}
</script>

<style scoped>
td input {
  border: 1px solid #213547;
  width: 100%;
}

button {
  height: 25px;
  width: 30px;
  background-color: #213547;
  color: #ffffff;
  border: 1px solid #213547;
  border-radius: 20px 20px 20px 20px;
}
</style>
