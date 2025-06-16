import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateBasicInfoDto {
  @ApiProperty({
    type: String,
    example: 'Dr. Evelyn Reed',
    required: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Passionate Language Educator | English & Spanish Specialist'
  })
  @IsString()
  tagline: string;

  @ApiProperty({
    example: 'https://i.pravatar.cc/300',
    required: true,
  })
  @IsString()
  profile_picture_url: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "With over a decade of experience, I craft engaging and effective learning journeys for students of all ages. My approach is student-centered, focusing on building confidence and fluency. Let's explore the world of languages together!"
  })
  @IsString()
  bio_summary: string;
}
