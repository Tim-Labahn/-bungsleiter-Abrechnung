import { ref } from 'vue';

type User = {
  ID: number;
  Name: string;
  Day: number;
  Month: number;
  Year: number;
  Age: number;
  Gender: string;
  Passwort: string;
};

export const logedInUserID = ref(0);

export const users = ref<User[]>([]);

localStorage.setItem('Users', JSON.stringify(users.value));
let Users = JSON.parse(localStorage.getItem('Users')!);
console.log(Users);
