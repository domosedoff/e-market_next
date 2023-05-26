import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: `UserName from types` })
  username: string;

  @ApiProperty({ example: `UserPassword from types` })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        usermane: `Yu`,
        password: `secret`,
      },
    },
  })
  user: {
    userId: number;
    usermane: string;
    password: string;
  };

  @ApiProperty({ example: `Logged in` })
  password: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: `Session has ended` })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  iserId: number;

  @ApiProperty({ example: `Yura` })
  username: string;

  @ApiProperty({ example: `domosedov@mail.ru` })
  email: number;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: `Yura` })
  username: string;

  @ApiProperty({
    example: '$2b$10$Nf4RyjKfFQjQCMk2O/oakuH2bNWoptZu2f7.XtWrRw5ymokrAuO.K',
  })
  password: string;

  @ApiProperty({ example: `domosedov@mail.ru` })
  email: string;

  @ApiProperty({ example: '2023-05-26T10:08:15.569Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-05-26T10:08:15.569Z' })
  createdAt: string;
}
