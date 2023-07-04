import { CoffeeLoader } from './coffee';
import { RecipeLoader } from './recipe';
import { TestLoader } from './test';
import { UserLoader } from './users';

export const DEV_LOADERS = [RecipeLoader, CoffeeLoader, UserLoader, TestLoader];
