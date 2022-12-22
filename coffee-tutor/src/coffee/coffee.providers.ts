import { DataSource } from 'typeorm';
import { Coffee } from '../coffee/entities/coffee.entity';

export const CoffeeProviders = [
  {
    provide: 'COFFEE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Coffee),
    inject: ['DATA_SOURCE'],
  },
];