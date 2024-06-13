import { BASE_PATH } from './constants';
import { IUser } from '../components/UserList';

type TypeRes = {
  ok: boolean;
  status: number;
  message?: string;
  json: () => Promise<IUser[]>;
};

const checkResponse = (res: TypeRes) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}-${res.message}`);

export const getUserData = (param: string) =>
  fetch(`${BASE_PATH}/?term=${param}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(checkResponse);
