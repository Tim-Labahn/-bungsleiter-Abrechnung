import { ref } from 'vue';

export type UserType = {
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

export const logedInUserID = ref(80085);
export const users = ref<UserType[]>([]);
users.value.push();

users.value.push({
  ID: 80085,
  Name: 'Tim Labahn',
  Day: 6,
  Month: 5,
  Year: 2006,
  Age: 17,
  Gender: 'Male',
  Passwort: 'Sommer2023!',
  Email: 'Mail@timlabahn.de',
});
users.value.push({
  ID: 10000,
  Name: 'New User',
  Day: 1,
  Month: 1,
  Year: 1970,
  Age: 53,
  Gender: 'Male',
  Passwort: 'Passwort',
  Email: 'Test@timlabahn.de',
});

localStorage.setItem('LocalUserList', JSON.stringify(users.value));

// let LocalUsers = JSON.parse(localStorage.getItem('Users')!);
// let activUser = LocalUsers.find(user => user.ID === logedInUserID);
