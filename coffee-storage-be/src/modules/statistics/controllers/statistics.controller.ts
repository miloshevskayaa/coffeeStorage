import { Body, Get, Post, Request } from '@nestjs/common';

import { IsAuthenticated } from '@shared/user';

import { StatisticsController as Controller } from '../decorators';
import { StatisticsService } from '../services';

@Controller()
export class StatisticsController {
  constructor(private readonly _statisticsService: StatisticsService) {}

  @IsAuthenticated()
  @Post('create')
  async createOneStatistic(@Request() { user }: any, @Body() body: any) {
    return this._statisticsService.createOneStatistic(user.user.id, body.result);
  }

  @IsAuthenticated()
  @Get()
  async getStatistics(@Request() { user }: any) {
    return this._statisticsService.getStatisticsById(user.user.id);
  }
}
