import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '1' })
  userId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Dana' })
  userName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'images/users/default.jpg' })
  avatar: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'moskaluk@mail.ru' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '+375298905765' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'passDanik' })
  password: string;
}
