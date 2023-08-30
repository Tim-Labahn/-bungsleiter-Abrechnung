<template>
  <div>
    <div
      style="
        position: absolute;
        margin-left: -350px;
        margin-top: -60px;
        border: 1px solid #213547;
        background-color: whitesmoke;
        border-radius: 0px 30px 30px 0px;
        width: 200px;
        height: 800px;
        font-size: larger;
        text-align: left;
      "
    >
      <div class="JoinAClub">
        <button
          @click="
            JoinAClub = true;
            CreateAClub = false;
          "
        >
          Join a Club
        </button>
      </div>
      <div class="CreateAClub">
        <button
          @click="
            CreateAClub = true;
            JoinAClub = false;
          "
        >
          Create a Club
        </button>
      </div>
    </div>
    <div
      style="
        position: relative;
        border: 1px solid black;
        width: 1500px;
        height: 750px;
        margin-left: 50px;
        border-radius: 20px;
        background-color: whitesmoke;
        text-align: center;
      "
    >
      <h2>Club management</h2>
      <div v-if="CreateAClub">
        <h3>Create Club</h3>
        <table style="width: 1200px; margin-left: 150px">
          <div name="Table Head" style="border: 1px solid #213547; border-radius: 10px 0px 0px 0px">
            <tr>
              <th colspan="3" style="width: 300px">
                <label for="Clubname">Club name:</label>
                <input style="width: 100%" name="ClubName" placeholder="Enter Name Here" />
              </th>
              <th colspan="3" style="width: 300px"></th>
              <th colspan="3" style="width: 300px">
                <input style="width: 100%" names="ClubSportArt" placeholder="Enter the clubs Sportart Here" />
              </th>
            </tr>
          </div>
          <div name="Table Body">
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </div>
        </table>
      </div>
      <div v-if="JoinAClub">
        <h3>Join A Club</h3>
        <!-- <div v-for="club in clubs">T</div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
// import { clubs, logedInUserID, users } from '../userInformation';

const CreateAClub = ref(true);
const JoinAClub = ref(false);
/*
function checkIfUserIsInClub() {
  // nervig langer name aber genau xD
  if (clubs.value !== undefined) {
    console.log(clubs.value.find(clubs => clubs.Mitglieder === logedInUserID.value));
    return true;
  }
  return false;
}
*/
</script>
