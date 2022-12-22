import { Controller, Get, Param } from '@nestjs/common';
import { CoffeeService } from './coffee.service';


@Controller('coffee')
export class CoffeeController {
    constructor(private coffeeService: CoffeeService,) {}

    @Get()
    getAll() {
        return this.coffeeService.getAll();
    }

}
