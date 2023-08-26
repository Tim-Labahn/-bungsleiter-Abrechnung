import { ref } from 'vue';

export type UserType = {
  ID: number;
  Name: string;
  Birthday: number;
  Gender: string;
  Passwort: string;
  Email: string;
};

export const logedInUserID = ref<number | undefined>(80085);
export const users = ref<UserType[]>([]);
// users.value.push(logedInUserID.value);

localStorage.setItem('LocalUserList', JSON.stringify(users.value));

// let LocalUsers = JSON.parse(localStorage.getItem('Users')!);
// let activUser = LocalUsers.find(user => user.ID === logedInUserID);
