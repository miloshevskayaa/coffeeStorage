import { DeepPartial } from 'typeorm';

import { Test } from '@entities/test';
import { TEST_FIXTURES } from '@fixtures/dev/data/test';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class TestLoader extends AbstractLoader<Test> {
  entity: new () => Test = Test;

  data: DeepPartial<Test>[] = TEST_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
