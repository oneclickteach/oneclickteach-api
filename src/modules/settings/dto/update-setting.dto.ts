import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';
import { UpdateTestimonialDto } from './update-testimonials.dto';
import { UpdateResourceDto } from './update-resources.dto';
import { UpdateSocialLinkDto } from './update-social-links.dto';

export class UpdateSettingDto {
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
    example: 'Passionate Language Educator | English & Spanish Specialist',
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
    example:
      "With over a decade of experience, I craft engaging and effective learning journeys for students of all ages. My approach is student-centered, focusing on building confidence and fluency. Let's explore the world of languages together!",
  })
  @IsString()
  bio_summary: string;

  @ApiProperty({
    type: String,
    required: false,
    example:
      'I believe language learning should be an immersive and enjoyable adventure. My methodology integrates communicative approaches with cultural insights, ensuring students not only learn the language but also appreciate its context. I foster a supportive environment where mistakes are learning opportunities, and progress is celebrated.',
  })
  @IsString()
  teaching_philosophy: string;

  @ApiProperty({
    example: 'Ghasemian',
    required: false,
  })
  @IsEmail()
  contact_email: string;

  @ApiProperty({
    type: UpdateSocialLinkDto,
    required: true,
  })
  @Type(() => UpdateSocialLinkDto)
  social_links: UpdateSocialLinkDto;

  @ApiProperty({
    type: UpdateTestimonialDto,
    required: true,
    isArray: true,
  })
  @Type(() => UpdateTestimonialDto)
  @IsArray()
  testimonials: UpdateTestimonialDto[];

  @ApiProperty({
    type: UpdateResourceDto,
    required: true,
    isArray: true,
  })
  @Type(() => UpdateResourceDto)
  @IsArray()
  resources: UpdateResourceDto[];

  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  scheduling_url?: string;
}
