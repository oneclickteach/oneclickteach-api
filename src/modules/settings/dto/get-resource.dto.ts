import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';

export class GetResourceDto extends AbstractGetDto {
  @ApiProperty({
    type: String,
    example: 'Spanish Verb Conjugation Guide',
    required: true,
  })
  @IsString()
  @Expose()
  title: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'A handy guide covering common Spanish verb conjugations.'
  })
  @IsString()
  @Expose()
  description: string;

  @ApiProperty({
    type: String,
    example: '#',
    required: true,
  })
  @IsString()
  @Expose()
  url: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'download'
  })
  @IsString()
  @Expose()
  type: string;
}
