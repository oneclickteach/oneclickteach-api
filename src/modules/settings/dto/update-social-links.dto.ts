import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSocialLinkDto {
  @ApiProperty({
    type: String,
    example: 'https://linkedin.com/in/evelynreed-example',
    required: false,
  })
  @IsString()
  @IsOptional()
  linkedin?: string;

  @ApiProperty({
    type: String,
    example: 'https://twitter.com/evelynreed-example',
    required: false,
  })
  @IsString()
  @IsOptional()
  twitter?: string

  @ApiProperty({
    type: String,
    example: 'https://t.me/example',
    required: false,
  })
  @IsString()
  @IsOptional()
  telegram?: string

  @ApiProperty({
    type: String,
    example: 'https://wa.me/example',
    required: false,
  })
  @IsString()
  @IsOptional()
  whatsapp: string
}

export class UpdateSocialLinksDto {
  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: true,
  })
  @IsEmail()
  contact_email: string;

  @ApiProperty({
    type: UpdateSocialLinkDto,
    required: true,
  })
  @Type(() => UpdateSocialLinkDto)
  @ValidateNested()
  social_links: UpdateSocialLinkDto;
}

