import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+989129632744',
    required: false,
  })
  @IsString()
  @IsOptional()
  mobile_phone: string;

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
    example: 'YP<7(SHO&;8@Zh;!wsjNMAx6Y',
    required: true,
  })
  @MinLength(6)
  @MaxLength(128)
  password: string;
}
