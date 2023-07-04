import { Column, Entity, ManyToOne } from 'typeorm';

import { User } from '@entities/user';

import { BaseEntity } from '../common';

@Entity('statistics')
export class Statistics extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'result',
  })
  result: string;

  @Column({
    type: 'timestamp',
    name: 'date',
  })
  date: Date;

  @ManyToOne(() => User, (user: User) => user.id)
  user: User;
}
