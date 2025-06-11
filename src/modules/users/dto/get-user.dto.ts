import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';
import { Gender, UserRole } from 'src/common/enums/user.enum';

export class GetUserDto extends AbstractGetDto {
  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: false,
  })
  @IsEmail()
  @Expose()
  email?: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  @Expose()
  email_is_verified?: boolean;

  @ApiProperty({
    example: '+989129632744',
    required: true,
  })
  @IsString()
  @Expose()
  mobile_phone?: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  @Expose()
  mobile_phone_is_verified?: boolean;

  @ApiProperty({
    example: 'Mahdad',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Expose()
  first_name?: string;

  @ApiProperty({
    example: 'Ghasemian',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Expose()
  last_name?: string;

  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Expose()
  avatar?: string;

  @ApiProperty({
    enum: Gender,
    default: Gender.UNKNOWN,
    required: true,
  })
  @IsEnum(Gender)
  @Expose()
  gender?: Gender;

  @ApiProperty({
    enum: UserRole,
    default: UserRole.STUDENT,
    required: true,
  })
  @IsEnum(UserRole)
  @Expose()
  user_role?: UserRole;
}
