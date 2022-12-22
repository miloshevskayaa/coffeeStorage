import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeService } from './coffee.service';
import { CoffeeProviders } from './coffee.providers';
import { Coffee } from '../coffee/entities/coffee.entity'
import { CoffeeController } from './coffee.controller'


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeeController],
  providers: [
    ...CoffeeProviders,
    CoffeeService
  ],
})

export class CoffeeModule {}
