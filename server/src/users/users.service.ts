import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: {
    where: { id?: string; userName?: string; email?: string };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }
  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User()

    const existingByUserName await this.findOne({
        where: {userName: createUserDto.username}
    })

    const existingByEmail await this.findOne({
        where: {email: createUserDto.email}
    })

   if (existingByUserName) {
    return {warningMessage: `Пользователь с таким именем уже существует!`}
   }

   if (existingByEmail) {
    return {warningMessage: `Пользователь с таким email уже существует!`}
   }


  }
}
