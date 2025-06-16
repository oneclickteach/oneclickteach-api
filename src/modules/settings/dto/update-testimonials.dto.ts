import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

export class UpdateTestimonialDto {
  @ApiProperty({
    type: String,
    example: 'I had the pleasure of working with Dr. Evelyn Reed, and I must say, she is an absolute gem. Her expertise in language education is evident in every lesson she conducts. She is not only knowledgeable but also patient and supportive, making the learning process enjoyable and effective.',
    required: true,
  })
  @IsString()
  quote: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Dr. Evelyn Reed',
  })
  @IsString()
  student_name: string;
}


export class UpdateTestimonialsDto {
  @ApiProperty({
    type: UpdateTestimonialDto,
    required: true,
    isArray: true,
  })
  @Type(() => UpdateTestimonialDto)
  @IsArray()
  testimonials: UpdateTestimonialDto[];
}