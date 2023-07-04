import { Recipe } from '@entities/recipe';
import { RECIPE_FIXTURES } from '@fixtures/dev/data/recipe';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';

export class RecipeLoader extends AbstractLoader<Recipe> {
  entity: new () => Recipe = Recipe;

  data: Partial<Recipe>[] = RECIPE_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
