import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';

export class GetTestimonialDto extends AbstractGetDto {
  @ApiProperty({
    type: String,
    example: 'I had the pleasure of working with Dr. Evelyn Reed, and I must say, she is an absolute gem. Her expertise in language education is evident in every lesson she conducts. She is not only knowledgeable but also patient and supportive, making the learning process enjoyable and effective.',
    required: true,
  })
  @IsString()
  @Expose()
  quote: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Dr. Evelyn Reed',
  })
  @IsString()
  @Expose()
  student_name: string;
}
