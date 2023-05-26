import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { localAuthGuard } from 'src/auth/localauth.guarg';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignupResponse,
} from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ type: SignupResponse })
  @Post(`/signup`)
  @HttpCode(HttpStatus.CREATED)
  @Header(`ContentType`, `application/json`)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBody({ type: LoginUserRequest })
  @ApiOkResponse({ type: LoginUserResponse })
  @Post(`/login`)
  @UseGuards(localAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header(`ContentType`, `application/json`)
  login(@Request() req) {
    return { user: req.user, msg: `Logget In` };
  }

  @ApiOkResponse({ type: LoginCheckResponse })
  @Get(`/login-check`)
  @UseGuards(AuthenticatedGuard)
  @Header(`ContentType`, `application/json`)
  loginCheck(@Request() req) {
    return req.user;
  }

  @ApiOkResponse({ type: LogoutUserResponse })
  @Get(`/logout`)
  logout(@Request() req) {
    req.session.destroy();
    return { msg: `Session has ended` };
  }
}
