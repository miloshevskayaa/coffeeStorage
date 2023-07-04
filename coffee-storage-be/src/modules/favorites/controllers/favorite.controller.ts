import { Body, Delete, Get, Post, Query, Request } from '@nestjs/common';

import { IsAuthenticated } from '@shared/user';

import { FavoriteController as Controller } from '../decorators';
import { FavoriteService } from '../services';

@Controller()
export class FavoriteController {
  constructor(private readonly _favoriteService: FavoriteService) {}

  @IsAuthenticated()
  @Get()
  async getFavorites(@Request() { user }: any, @Query() { search }: any) {
    return this._favoriteService.getFavorites(user.user.id, search);
  }

  @Post('create')
  async createFavorite(@Body() { userId, coffeeId }: any) {
    return this._favoriteService.createFavorite(userId, coffeeId);
  }

  @Delete('remove')
  async removeFavorite(@Body() { userId, coffeeId }: any) {
    return this._favoriteService.removeFavorite(userId, coffeeId);
  }
}
