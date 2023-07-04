import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { Coffee } from '@entities/coffee';

import { BaseEntity } from '../common';

@Entity('test')
export class Test extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'question',
    unique: true,
  })
  question: string;

  @Column({
    type: 'varchar',
    name: 'image',
    length: 64,
  })
  image: string;

  @OneToOne(() => Coffee, (coffee: Coffee) => coffee.id)
  @JoinColumn()
  rightAnswer: Coffee;
}
