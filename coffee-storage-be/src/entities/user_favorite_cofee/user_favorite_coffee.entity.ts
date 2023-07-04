import { Entity, ManyToOne } from 'typeorm';

import { Coffee } from '@entities/coffee';
import { User } from '@entities/user';

import { BaseEntity } from '../common';

@Entity('user_favorite_coffee')
export class UserFavoriteCoffee extends BaseEntity {
  @ManyToOne(() => User, (user: any) => user.id)
  user: User;

  @ManyToOne(() => Coffee, (coffee: any) => coffee.id)
  coffee: Coffee;
}
