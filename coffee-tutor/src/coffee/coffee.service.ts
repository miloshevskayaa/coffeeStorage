import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class CoffeeService {

  constructor(@InjectRepository(Coffee) private coffeeRepository: Repository<Coffee> ) {}

  async getAll(): Promise<Coffee[]> {
       return await this.coffeeRepository.find({
                select: ["name", "primary_picture", "secondary_picture", "youtube_link"],
       });
  }

}
