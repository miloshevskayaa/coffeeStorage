import { Coffee } from './coffee';
import { OneTimePassword } from './otp';
import { Recipe } from './recipe';
import { Statistics } from './statistics';
import { Test } from './test';
import { User } from './user';
import { UserFavoriteCoffee } from './user_favorite_cofee';

export const ENTITIES = [Coffee, Recipe, User, UserFavoriteCoffee, OneTimePassword, Test, Statistics];

export const SUBSCRIBERS = [];
