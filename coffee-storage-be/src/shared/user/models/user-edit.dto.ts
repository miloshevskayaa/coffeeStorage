import { ApiProperty, OmitType } from '@nestjs/swagger';

import { UserDto } from './user.dto';

export class UserEditDto extends OmitType(UserDto, ['userId', 'password', 'avatar']) {
  @ApiProperty({ example: 'passDana' })
  password: string;

  @ApiProperty({ example: 'images/users/default.jpg' })
  avatar: string;
}
