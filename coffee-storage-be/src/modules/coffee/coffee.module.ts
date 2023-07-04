import { Module } from '@nestjs/common';

import { COFFEE_CONTROLLERS } from './controllers';
import { COFFEE_SERVICES } from './services';

@Module({
  providers: [...COFFEE_SERVICES],
  controllers: [...COFFEE_CONTROLLERS],
})
export class CoffeeModule {}
