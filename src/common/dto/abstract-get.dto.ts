import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDateString, IsString, IsOptional } from 'class-validator';

export class AbstractGetDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @Expose()
  id?: string;

  @ApiProperty({
    type: Date,
    required: true,
  })
  @IsDateString()
  @Expose()
  created_at?: Date;

  @ApiProperty({
    type: Date,
    required: true,
  })
  @IsDateString()
  @Expose()
  updated_at?: Date;
}
