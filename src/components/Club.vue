<template>
  <div>
    <div
      style="
        position: absolute;
        margin-left: -400px;
        border: 1px solid #213547;
        background-color: whitesmoke;
        border-radius: 30px;
        width: 300px;
        height: 780px;
        font-size: larger;
        text-align: center;
      "
    >
      <div class="JoinAClub">
        <button>Join a Club</button>
      </div>
      <div class="CreateAClub">
        <button @click="CreateAClub = true">Create a Club</button>
      </div>
    </div>
    <div
      style="
        position: relative;
        border: 1px solid black;
        width: 1500px;
        height: 780px;
        margin-left: 50px;
        border-radius: 20px;
        background-color: whitesmoke;
        text-align: center;
      "
    >
      Club management
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { clubs, logedInUserID, users } from '../userInformation';

const CreateAClub = ref(true);

export default {
  methods: {
    checkIfUserIsInClub() {
      // nervig langer name aber genau xD
      if (clubs.value !== undefined) {
        console.log(clubs.value.find(clubs => clubs.Mitglieder === logedInUserID.value));
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      CreateAClub: false,
      JoinAClub: false,
    };
  },
};
</script>
