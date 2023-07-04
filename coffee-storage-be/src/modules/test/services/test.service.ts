import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Test } from '@entities/test';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private _testRepository: Repository<Test>,
  ) {}

  async getQuestions(): Promise<any> {
    const questions = this._testRepository
      .createQueryBuilder('test')
      .select()
      .leftJoinAndSelect('test.rightAnswer', 'coffee')
      .leftJoinAndSelect('coffee.recipe', 'recipe')
      .orderBy('RAND()')
      .take(5)
      .getMany();

    return questions;
  }
}
