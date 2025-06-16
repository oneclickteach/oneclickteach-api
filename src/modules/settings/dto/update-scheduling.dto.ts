import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSchedulingDto {
  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: true,
  })
  @IsString()
  scheduling_url: string;
}
