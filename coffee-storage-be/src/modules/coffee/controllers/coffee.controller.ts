import { Get, Query } from '@nestjs/common';

import { CoffeeController as Controller } from '../decorators';
import { CoffeeService } from '../services';

@Controller()
export class CoffeeController {
  constructor(private readonly _coffeeService: CoffeeService) {}

  @Get()
  async getCoffee(@Query() { search }: any) {
    return this._coffeeService.getCoffee(search);
  }

  @Get('one')
  async getOneCoffee(@Query() { coffeeId }: any) {
    return this._coffeeService.getOneCoffee(coffeeId);
  }
}
