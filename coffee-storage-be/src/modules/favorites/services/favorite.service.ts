import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserFavoriteCoffee } from '@entities/user_favorite_cofee';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(UserFavoriteCoffee)
    private _favoriteRepository: Repository<UserFavoriteCoffee>,
  ) {}

  async getFavorites(userId: string, search: string): Promise<any> {
    console.log(userId);

    const favorites = await this._favoriteRepository
      .createQueryBuilder('user_favorite_coffee')
      .leftJoinAndSelect('user_favorite_coffee.coffee', 'coffee')
      .leftJoinAndSelect('coffee.recipe', 'recipe')
      .where('user.id = :id', { id: userId })
      .leftJoinAndSelect('user_favorite_coffee.user', 'user');

    search ? favorites.andWhere('recipe.rusTitle like :search', { search: `%${search}%` }) : favorites;

    return favorites.getMany();
  }

  async createFavorite(userId: string, coffeeId: string) {
    if (!userId || !coffeeId) {
      throw new BadRequestException('Nou full data');
    }

    await this._favoriteRepository.save({ user: { id: userId }, coffee: { id: coffeeId } });
  }

  async removeFavorite(userId: string, coffeeId: string) {
    const favorite = await this._favoriteRepository
      .createQueryBuilder('user_favorite_coffee')
      .leftJoinAndSelect('user_favorite_coffee.coffee', 'coffee')
      .leftJoin('user_favorite_coffee.user', 'user')
      .where('user.id = :userid', { userid: userId })
      .andWhere('coffee.id = :coffeeId', { coffeeId: coffeeId })
      .getOne();

    await this._favoriteRepository.delete(favorite.id);
  }
}
