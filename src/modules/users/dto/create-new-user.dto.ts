import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Gender, UserRole } from 'src/common/enums/user.enum';

export class CreateNewUserDto {
  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  email_is_verified: boolean;

  @ApiProperty({
    example: '+989129632744',
    required: true,
  })
  @IsString()
  mobile_phone: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  mobile_phone_is_verified: boolean;

  @ApiProperty({
    example: 'Mahdad',
    required: true,
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'Ghasemian',
    required: true,
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({
    enum: Gender,
    default: Gender.UNKNOWN,
    required: true,
  })
  @IsEnum(Gender)
  gender?: Gender;

  @ApiProperty({
    enum: UserRole,
    default: UserRole.STUDENT,
    required: true,
  })
  @IsEnum(UserRole)
  user_role?: UserRole;

  @ApiProperty({
    required: true,
  })
  @IsString()
  hashed_password: string;
}
