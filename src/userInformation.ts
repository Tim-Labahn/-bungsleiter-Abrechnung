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

let localUsers = JSON.parse(localStorage.getItem('Users')!);
console.log(localUsers);

export function reloadUsers() {
  for (let i = 0; i < localUsers.lenght + 10; i++) {
    console.log('test');
  }
}

/*
localStorage.setItem('test', JSON.stringify([37, { a: 5 }]));
let test = JSON.parse(localStorage.getItem('test')!);
console.log(test);
// localStorage.clear();
*/
