import { DataSource } from 'typeorm';
import { Recipe } from './entities/examination.entity';

export const ExaminationProviders = [
  {
    provide: 'RECIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Recipe),
    inject: ['DATA_SOURCE'],
  },
];