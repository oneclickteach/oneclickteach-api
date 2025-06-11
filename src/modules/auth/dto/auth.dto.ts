import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { GetUserDto } from './get-user.dto';
import { Type } from 'class-transformer';
import { Expose } from 'class-transformer';

export class AuthDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @Expose()
  access_token: string;

  @ApiProperty({
    type: GetUserDto,
    required: false,
  })
  @Type(() => GetUserDto)
  @Expose()
  user?: GetUserDto;
}
