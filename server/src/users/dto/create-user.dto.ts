import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: `user name` })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: `user password` })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: `user email` })
  @IsNotEmpty()
  readonly email: string;
}
