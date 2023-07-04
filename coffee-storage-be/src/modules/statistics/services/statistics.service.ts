import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Statistics } from '@entities/statistics';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistics)
    private _statisticsRepository: Repository<Statistics>,
  ) {}

  async createOneStatistic(userId: string, result: string) {
    const date = new Date();

    date.setHours(date.getHours() + 3);

    const statistics = await this._statisticsRepository.create({ user: { id: userId }, result, date });

    await this._statisticsRepository.save(statistics);
  }

  async getStatisticsById(userId: string): Promise<any> {
    const statistics = this._statisticsRepository
      .createQueryBuilder('statistics')
      .leftJoinAndSelect('statistics.user', 'user')
      .where('user.id = :userId', { userId })
      .getMany();

    return statistics;
  }
}
