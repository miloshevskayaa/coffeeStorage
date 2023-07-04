import { Config } from '@core/config';
import { User } from '@entities/user';

import * as bcrypt from 'bcrypt';

export const USERS_FIXTURES: Partial<User>[] = [
  {
    id: '0cba07e1-fb1f-48dc-9ce0-e1b01fa0cffe',
    userId: 1,
    avatar: 'images/users/Dana.JPG',
    userName: 'Dana',
    email: 'miloshevskaya@mail.ru',
    phoneNumber: '+375296900050',
    password: bcrypt.hashSync('passDana', +Config.get.hashSalt),
  },
  {
    id: 'f1fb8063-cdca-4099-874f-af131f457517',
    userId: 2,
    avatar: 'images/users/Nadya.JPG',
    userName: 'Nadya',
    email: 'zhigimont@mail.ru',
    phoneNumber: '+375299788770',
    password: bcrypt.hashSync('passNadya', +Config.get.hashSalt),
  },
  {
    id: 'ea7fbfcf-94db-493e-b472-560b7c8d265e',
    userId: 3,
    avatar: 'images/users/Dasha.JPG',
    userName: 'Dasha',
    email: 'kilyachenko@mail.ru',
    phoneNumber: '+375296608090',
    password: bcrypt.hashSync('passDasha', +Config.get.hashSalt),
  },
];
