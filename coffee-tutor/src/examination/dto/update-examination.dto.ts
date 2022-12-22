import { PartialType } from '@nestjs/mapped-types';
import { CreateExaminationDto } from './create-examination.dto';

export class UpdateExaminationDto extends PartialType(CreateExaminationDto) {
        name: string;
        countEspresso: number;
        countWater: number;
        countMilkFoam: number;
        countIceCream: number;
        countCream: number;
        countLemonJuice: number;
        countWrippedCream: number;
    
}
