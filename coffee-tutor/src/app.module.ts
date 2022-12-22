import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CoffeeModule } from './coffee/coffee.module';
import { Coffee } from './coffee/entities/coffee.entity';
import {Recipe} from './examination/entities/examination.entity';
import { Espresso } from './examination/entities/espresso.entity';
import { ExaminationModule } from './examination/examination.module';
import { Milk } from './examination/entities/milk.entity';
import { Chocolate } from './examination/entities/chocolate.entity';
import { Whiskey } from './examination/entities/whiskey.entity';
import { Syrop } from './examination/entities/syrop.entity';
import { Topping } from './examination/entities/topping.entity';

@Module({
  imports: [CoffeeModule, DatabaseModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'coffeestorage',
    entities: [Coffee, Recipe, Espresso, Milk, Chocolate, Whiskey, Syrop, Topping],
    synchronize: true,

  }),
    ExaminationModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
