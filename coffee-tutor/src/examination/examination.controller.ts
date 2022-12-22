import { Controller, Get, Post, Body, Patch, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ExaminationService } from './examination.service';
import { CreateExaminationDto } from './dto/create-examination.dto';
import { UpdateExaminationDto } from './dto/update-examination.dto';
import { CreateEspressoDto } from './dto/create-espresso.dto';
import { CreateMilkDto } from './dto/create-milk.dto';
import { CreateChocolateDto } from './dto/create-chocolate.dto';
import { CreateWhiskeyDto } from './dto/create-whiskey.dto';
import { CreateSyropDto } from './dto/create-syrop.dto';
import { CreateToppingDto } from './dto/create-topping.dto';

@Controller('examination')
export class ExaminationController {
    constructor(private examinationService: ExaminationService) {}
    @Get()
    getRecipe(){
        return this.examinationService.findRecipe();
    }

    @Post()
    createRecipe(@Body() createExaminationDto: CreateExaminationDto){
       return this.examinationService.createRecipe(createExaminationDto);
    }

    @Put(':id')
    async updateRecipeById(
        @Param('id',ParseIntPipe)id:number, 
        @Body() updateFlatsDto: UpdateExaminationDto){
        await this.examinationService.updateRecipe(id, updateFlatsDto);
    }

    @Post(':id/name')
    createEsspreso(
    @Param('id', ParseIntPipe) id: number,
    @Body() createEspressoDto: CreateEspressoDto,){
        return this.examinationService.CreateEspresso(id, createEspressoDto)
    }

    @Post(':id/name')
    createMilk(
    @Param('id', ParseIntPipe) id: number,
    @Body() createMilkDto: CreateMilkDto,){
        return this.examinationService.CreateMilk(id, createMilkDto)
    }

    @Post(':id/name')
    createChocolate(
    @Param('id', ParseIntPipe) id: number,
    @Body() createChocolateDto: CreateChocolateDto,){
        return this.examinationService.CreateChocolate(id, createChocolateDto)
    }

    @Post(':id/name')
    createWhiskey(
    @Param('id', ParseIntPipe) id: number,
    @Body() createWhiskeyDto: CreateWhiskeyDto,){
        return this.examinationService.CreateWhiskey(id, createWhiskeyDto)
    }

    @Post(':id/name')
    createSyrop(
    @Param('id', ParseIntPipe) id: number,
    @Body() createSyropDto: CreateSyropDto,){
        return this.examinationService.CreateSyrop(id, createSyropDto)
    }

    @Post(':id/name')
    createTopping(
    @Param('id', ParseIntPipe) id: number,
    @Body() createToppingDto: CreateToppingDto,){
        return this.examinationService.CreateTopping(id, createToppingDto)
    }
}
