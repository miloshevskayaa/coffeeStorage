import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Coffee } from '@entities/coffee';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private _coffeeRepository: Repository<Coffee>,
  ) {}

  async getCoffee(search: string): Promise<any> {
    const coffee = await this._coffeeRepository
      .createQueryBuilder('coffee')
      .leftJoinAndSelect('coffee.recipe', 'recipe');

    search ? coffee.where('recipe.rusTitle like :search', { search: `%${search}%` }) : coffee;

    return coffee.getMany();
  }

  async getOneCoffee(coffeeId: string): Promise<any> {
    const coffee = await this._coffeeRepository
      .createQueryBuilder('coffee')
      .leftJoinAndSelect('coffee.recipe', 'recipe')
      .where('coffee.id = :id', { id: coffeeId })
      .getOne();

    return coffee;
  }
}
