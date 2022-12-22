import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExaminationService } from './examination.service';
import { ExaminationController } from './examination.controller';
import { Recipe } from './entities/examination.entity';
import { Espresso } from './entities/espresso.entity';
import { Milk } from './entities/milk.entity'
import { DatabaseModule } from 'src/database/database.module';
import { ExaminationProviders } from './examination.providers';
import { Chocolate } from './entities/chocolate.entity';
import { Whiskey } from './entities/whiskey.entity';
import { Syrop } from './entities/syrop.entity';
import { Topping } from './entities/topping.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Recipe, Espresso, Milk, Chocolate, Whiskey, Syrop, Topping])],
  controllers: [ExaminationController],
  providers: [
    ...ExaminationProviders,
    ExaminationService]
})
export class ExaminationModule {}

