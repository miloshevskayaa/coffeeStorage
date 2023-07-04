import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { Recipe } from '@entities/recipe';

import { BaseEntity } from '../common';

@Entity('coffee')
export class Coffee extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'title',
    length: 20,
  })
  title: string;

  @Column({
    type: 'varchar',
    name: 'image_primary',
    length: 60,
  })
  imagePrimary: string;

  @Column({
    type: 'varchar',
    name: 'image_secondary',
    length: 60,
  })
  imageSecondary: string;

  @Column({
    type: 'varchar',
    name: 'video_link',
    length: 255,
  })
  videoLink: string;

  @OneToOne(() => Recipe, (recipe: Recipe) => recipe.id)
  @JoinColumn()
  recipe: Recipe;
}
