export type CreateExaminationParams = {
    name: string;
    countEspresso: number;
    countWater: number;
    countMilkFoam: number;
    countIceCream: number;
    countCream: number;
    countLemonJuice: number;
    countWrippedCream: number;
}

export type UpdateExaminationParams = {
    name: string;
    countEspresso: number;
    countWater: number;
    countMilkFoam: number;
    countIceCream: number;
    countCream: number;
    countLemonJuice: number;
    countWrippedCream: number;
}

export type CreateEspressoParams = {
    type: string;
    count: number;
}

export class CreateMilkParams {
    name: string;
    count: number;
}


export class CreateChocolateParams {
    name: string;
    count: number;
}

export class CreateWhiskeyParams {
    name: string;
    age: number;
    count: number;
}

export class CreateSyropParams {
    name: string;
    count: number;
}

export class CreateToppingParams {
    name: string;
    count: number;
}