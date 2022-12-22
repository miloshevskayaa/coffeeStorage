import { Injectable } from '@nestjs/common';
import { Recipe } from './entities/examination.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espresso } from './entities/espresso.entity';
import { Milk } from './entities/milk.entity'
import { Chocolate } from './entities/chocolate.entity';
import { Whiskey } from './entities/whiskey.entity';
import { Syrop } from './entities/syrop.entity';
import { Topping } from './entities/topping.entity';
import { CreateChocolateParams } from 'src/types';
import { CreateExaminationParams } from 'src/types';
import { UpdateExaminationParams } from 'src/types';
import { CreateEspressoParams } from 'src/types';
import { CreateMilkParams } from 'src/types'
import { CreateWhiskeyParams } from 'src/types';
import { CreateSyropParams } from 'src/types';
import { CreateToppingParams } from 'src/types';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExaminationService {
  constructor(@InjectRepository(Recipe) private examinationRepository: Repository<Recipe>,
  @InjectRepository(Espresso) private espressoRepository: Repository<Espresso>,
  @InjectRepository(Milk) private milkRepository: Repository<Milk>,
  @InjectRepository(Chocolate) private chocolateRepository: Repository<Chocolate>,
  @InjectRepository(Whiskey) private whiskeyRepository: Repository<Whiskey>,
  @InjectRepository(Syrop) private syropRepository: Repository<Syrop>,
  @InjectRepository(Topping) private toppingRepository: Repository<Topping>,


  ){}


  findRecipe(){
    return this.examinationRepository.find({relations:['espresso', 'milk', 'chocolate', 'whiskey', 'syrop', 'topping']});
   }

   createRecipe(recipeDetalis: CreateExaminationParams){
    const newRecipe = this.examinationRepository.create({
        ...recipeDetalis,
    });
    return this.examinationRepository.save(newRecipe);
  }

  updateRecipe(id: number, updateExaminationdetails: UpdateExaminationParams){
    return  this.examinationRepository.update({ id }, {...updateExaminationdetails});
  }

  async CreateEspresso(
    id:number,
    createExaminationDetalis: CreateEspressoParams,
    ){
     const recipe = await this.examinationRepository.findOneBy({id})
     if(!recipe) throw new HttpException('flats not found', HttpStatus.BAD_REQUEST,)
    
     const newEspresso = this.espressoRepository.create(createExaminationDetalis);
     const saveEspresso = await this.espressoRepository.save(newEspresso)
     recipe.espresso = [saveEspresso];
     return this.examinationRepository.save(recipe);
    } 

  async CreateMilk(
    id:number,
    createExaminationDetalis: CreateMilkParams, ){
     const recipe = await this.examinationRepository.findOneBy({id})
     if(!recipe) throw new HttpException('not found', HttpStatus.BAD_REQUEST,)
    
     const newMilk = this.milkRepository.create(createExaminationDetalis);
     const saveMilk = await this.milkRepository.save(newMilk)
     recipe.milk = [saveMilk];
     return this.examinationRepository.save(recipe);
     
    }

  async CreateChocolate(
    id:number,
    createExaminationDetalis: CreateChocolateParams,
    ){
     const recipe = await this.examinationRepository.findOneBy({id})
     if(!recipe) throw new HttpException('not found', HttpStatus.BAD_REQUEST,)
    
     const newChocolate = this.chocolateRepository.create(createExaminationDetalis);
     const saveChocolate = await this.chocolateRepository.save(newChocolate)
     recipe.chocolate = [saveChocolate];
     return this.examinationRepository.save(recipe);
    }
  
      
  async CreateWhiskey(
    id:number,
    createExaminationDetalis: CreateWhiskeyParams,
    ){
     const recipe = await this.examinationRepository.findOneBy({id})
     if(!recipe) throw new HttpException('not found', HttpStatus.BAD_REQUEST,)
    
     const newWhiskey = this.whiskeyRepository.create(createExaminationDetalis);
     const saveWhiskey = await this.whiskeyRepository.save(newWhiskey)
     recipe.whiskey = [saveWhiskey];
     return this.examinationRepository.save(recipe);
    }

  async CreateSyrop(
    id:number,
    createExaminationDetalis: CreateSyropParams,
    ){
     const recipe = await this.examinationRepository.findOneBy({id})
     if(!recipe) throw new HttpException('not found', HttpStatus.BAD_REQUEST,)
    
     const newSyrop = this.syropRepository.create(createExaminationDetalis);
     const saveSyrop = await this.syropRepository.save(newSyrop)
     recipe.syrop = [saveSyrop];
     return this.examinationRepository.save(recipe);
    }

    async CreateTopping(
      id:number,
      createExaminationDetalis: CreateToppingParams,
      ){
       const recipe = await this.examinationRepository.findOneBy({id})
       if(!recipe) throw new HttpException('not found', HttpStatus.BAD_REQUEST,)
      
       const newTopping = this.toppingRepository.create(createExaminationDetalis);
       const saveTopping = await this.toppingRepository.save(newTopping)
       recipe.topping = [saveTopping];
       return this.examinationRepository.save(recipe);
      }

} 

