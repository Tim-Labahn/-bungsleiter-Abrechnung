import { ref } from 'vue';

export type UserType = {
  ID: number;
  Name: string;
  Birthday: number;
  Gender: string;
  Passwort: string;
  Email: string;
  Clubs: Array<string>;
};

export type ClubType = {
  Name: string;
  MitgliederAnzahl: number | null | undefined;
  Mitglieder: Array<number> | null | undefined;
  SportArt: string;
};

export const logedInUserID = ref<number | undefined>();
export const users = ref<UserType[]>([]);
export const clubs = ref<ClubType[]>();

localStorage.setItem('LocalUserList', JSON.stringify(users.value));
