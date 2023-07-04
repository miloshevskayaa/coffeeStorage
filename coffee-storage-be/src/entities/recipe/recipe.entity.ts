import { Column, Entity } from 'typeorm';

// import { Coffee } from '@entities/coffee';
import { BaseEntity } from '../common';

@Entity('recipe')
export class Recipe extends BaseEntity {
  @Column({
    type: 'varchar',
    name: 'rus_title',
    length: 20,
  })
  rusTitle: string;

  @Column({
    type: 'tinyint',
    name: 'espresso_count',
  })
  espressoCount: number;

  @Column({
    type: 'tinyint',
    name: 'water_count',
  })
  waterCount: number;

  @Column({
    type: 'tinyint',
    name: 'milk_count',
  })
  milkCount: number;

  @Column({
    type: 'tinyint',
    name: 'milk_foam_count',
  })
  milkFoamCount: number;

  @Column({
    type: 'tinyint',
    name: 'wripped_cream_count',
  })
  wrippedCreamCount: number;

  @Column({
    type: 'tinyint',
    name: 'ice_cream_count',
  })
  iceCreamCount: number;

  @Column({
    type: 'tinyint',
    name: 'chocolate_count',
  })
  chocolateCount: number;

  @Column({
    type: 'tinyint',
    name: 'lemon_juice_count',
  })
  lemonJuiceCount: number;

  @Column({
    type: 'tinyint',
    name: 'whiskey_count',
  })
  whiskeyCount: number;

  @Column({
    type: 'tinyint',
    name: 'syrop_count',
  })
  syropCount: number;
}
