import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';

export class GetSocialLinksDto extends AbstractGetDto {
  @ApiProperty({
    type: String,
    example: 'https://linkedin.com/in/evelynreed-example',
    required: false,
  })
  @IsString()
  @Expose()
  linkedin?: string;

  @ApiProperty({
    type: String,
    example: 'https://twitter.com/evelynreed-example',
    required: false,
  })
  @IsString()
  @Expose()
  twitter?: string

  @ApiProperty({
    type: String,
    example: 'https://t.me/example',
    required: false,
  })
  @IsString()
  @Expose()
  telegram?: string

  @ApiProperty({
    type: String,
    example: 'https://wa.me/example',
    required: false,
  })
  @IsString()
  @Expose()
  whatsapp?: string
}
