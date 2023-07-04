import { Get } from '@nestjs/common';

import { TestController as Controller } from '../decorators';
import { TestService } from '../services';

@Controller()
export class TestController {
  constructor(private readonly _testService: TestService) {}

  @Get('questions')
  async getQuestions() {
    return this._testService.getQuestions();
  }
}
