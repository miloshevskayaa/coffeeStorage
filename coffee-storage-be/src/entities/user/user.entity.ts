import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../common';

@Entity('user')
export class User extends BaseEntity {
  @Column({
    type: 'smallint',
    name: 'user_id',
    unique: true,
  })
  userId: number;

  @Column({
    type: 'varchar',
    name: 'avatar',
    length: 64,
    nullable: true,
  })
  avatar: string;

  @Column({
    type: 'varchar',
    name: 'user_name',
    length: 40,
  })
  userName: string;

  @Column({
    type: 'varchar',
    name: 'email',
    length: 40,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    name: 'phone_number',
    length: 40,
    unique: true,
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
    name: 'password',
    length: 72,
    select: false,
  })
  password: string;

  // @OneToMany(() => UserFavoriteCoffee, (user: any) => user.user)
  // user: UserFavoriteCoffee[];
}
