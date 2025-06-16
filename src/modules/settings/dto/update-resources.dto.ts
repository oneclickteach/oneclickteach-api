import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateResourceDto {
  @ApiProperty({
    type: String,
    example: 'Spanish Verb Conjugation Guide',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'A handy guide covering common Spanish verb conjugations.'
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: String,
    example: '#',
    required: true,
  })
  @IsString()
  url: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'download'
  })
  @IsString()
  type: string;
}

export class UpdateResourcesDto {
  @ApiProperty({
    type: UpdateResourceDto,
    required: true,
    isArray: true,
  })
  @Type(() => UpdateResourceDto)
  @IsArray()
  resources: UpdateResourceDto[];
}
