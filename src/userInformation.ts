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
  Email: string;
};

export const logedInUserID = ref(0);

export const users = ref<User[]>([]);

localStorage.setItem('LocalUsers', 'd');
// let localUsers = JSON.parse(localStorage.getItem('LocalUsers')!);

export function reloadUsers() {
  for (let i = 0; i <= localUsers.length; i++) {
    users.value.push(localUsers[i]);
    console.log('user push');
  }
  console.log('users', users.value);
}

export function filterForEmail(input: string) {
  if (users.value.find(user => user.Email === input)) {
    console.log('idk ...');
  }
}
