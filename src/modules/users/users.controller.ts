import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard, Serialize } from 'src/common';
import { ApiOkPaginatedResponse, ApiPaginationQuery, Paginate, PaginateQuery } from 'nestjs-paginate';
import { GetUserDto } from './dto/get-user.dto';
import { USER_PAGINATION_CONFIG } from './pagination-config';
import { ListUserDto } from './dto/list-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Serialize(ListUserDto)
  @ApiOkPaginatedResponse(GetUserDto, USER_PAGINATION_CONFIG)
  @ApiPaginationQuery(USER_PAGINATION_CONFIG)
  async findAll(@Paginate() query: PaginateQuery) {
    return this.usersService.findAll(query);
  }


}
