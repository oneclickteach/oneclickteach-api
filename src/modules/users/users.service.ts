import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { createHash } from 'src/utils/hash.utils';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import { USER_PAGINATION_CONFIG } from './pagination-config';
import { GetUserDto } from './dto/get-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) { }

  async createNewUser(createNewUserDto: CreateNewUserDto) {

    const user = await this.create({
      email: createNewUserDto.email,
      email_is_verified: false,
      mobile_phone: createNewUserDto.mobile_phone,
      mobile_phone_is_verified: false,
      first_name: createNewUserDto.first_name,
      last_name: createNewUserDto.last_name,
      avatar: createNewUserDto.avatar,
      gender: createNewUserDto.gender,
      user_role: createNewUserDto.user_role,
      hashed_password: createNewUserDto.hashed_password,
    });

    return this.findOne({ id: user.id });
  }

  async create(createUserDto: CreateUserDto & { hashed_password: string }) {
    const user = Object.assign(new User({}), createUserDto);

    return await this.usersRepository.save(user);
  }

  async findAll(query: PaginateQuery) {
    return paginate(
      query,
      this.usersRepository.entityRepository,
      USER_PAGINATION_CONFIG,
    );
  }

  async findOne(getUserDto: Partial<GetUserDto>) {
    return this.usersRepository.findOne(getUserDto);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ id }, updateUserDto);
  }

  async remove(id: string) {
    return this.usersRepository.findOneAndDelete({ id });
  }
}
