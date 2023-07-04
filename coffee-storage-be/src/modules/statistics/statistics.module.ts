import { Module } from '@nestjs/common';

import { STATISTICS_CONTROLLERS } from './controllers';
import { STATISTICS_SERVICES } from './services';

@Module({
  providers: [...STATISTICS_SERVICES],
  controllers: [...STATISTICS_CONTROLLERS],
})
export class StatisticsModule {}
