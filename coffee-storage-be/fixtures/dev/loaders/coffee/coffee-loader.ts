import { DeepPartial } from 'typeorm';

import { Coffee } from '@entities/coffee';
import { COFFEE_FIXTURES } from '@fixtures/dev/data/coffee';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class CoffeeLoader extends AbstractLoader<Coffee> {
  entity: new () => Coffee = Coffee;

  data: DeepPartial<Coffee>[] = COFFEE_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
