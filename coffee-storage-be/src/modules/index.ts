import { AuthModule } from './auth/auth.module';
import { CoffeeModule } from './coffee/coffee.module';
import { FavoriteModule } from './favorites/favorite.module';
import { CreateModule } from './registration/create.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { StatisticsModule } from './statistics/statistics.module';
import { TestModule } from './test/test.module';
import { UpdateModule } from './update/update.module';

export const APP_MODULES = [
  CoffeeModule,
  AuthModule,
  FavoriteModule,
  UpdateModule,
  CreateModule,
  TestModule,
  StatisticsModule,
  ResetPasswordModule,
];
