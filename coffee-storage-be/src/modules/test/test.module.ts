import { Module } from '@nestjs/common';

import { TEST_CONTROLLERS } from './controllers';
import { TEST_SERVICES } from './services';

@Module({
  providers: [...TEST_SERVICES],
  controllers: [...TEST_CONTROLLERS],
})
export class TestModule {}
