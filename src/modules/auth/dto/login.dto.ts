import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Validate } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'YP<7(SHO&;8@Zh;!wsjNMAx6Y',
    required: true,
  })
  @IsString()
  password: string;
}
