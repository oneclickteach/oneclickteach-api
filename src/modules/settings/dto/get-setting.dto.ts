import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';
import { GetResourceDto } from './get-resource.dto';
import { GetTestimonialDto } from './get-testimonial.dto';
import { GetSocialLinksDto } from './get-social-links.dto';
import { GetLanguageDto } from './get-language.dto';

export class GetSettingDto extends AbstractGetDto {
  @ApiProperty({
    type: String,
    example: 'Dr. Evelyn Reed',
    required: false,
  })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Passionate Language Educator | English & Spanish Specialist'
  })
  @IsString()
  @Expose()
  tagline: string;

  @ApiProperty({
    example: 'https://i.pravatar.cc/300',
    required: true,
  })
  @IsString()
  @Expose()
  profile_picture_url: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "With over a decade of experience, I craft engaging and effective learning journeys for students of all ages. My approach is student-centered, focusing on building confidence and fluency. Let's explore the world of languages together!"
  })
  @IsString()
  @Expose()
  bio_summary: string;

  @ApiProperty({
    type: String,
    required: false,
    example: "I believe language learning should be an immersive and enjoyable adventure. My methodology integrates communicative approaches with cultural insights, ensuring students not only learn the language but also appreciate its context. I foster a supportive environment where mistakes are learning opportunities, and progress is celebrated.",
  })
  @IsString()
  @Expose()
  teaching_philosophy: string;

  @ApiProperty({
    example: 'mahdad.ghasemian@gmail.com',
    required: true,
  })
  @IsEmail()
  @Expose()
  contact_email: string;

  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: false,
  })
  @IsString()
  @Expose()
  social_links: GetSocialLinksDto;

  @ApiProperty({
    type: GetTestimonialDto,
    required: true,
    isArray: true,
  })
  @Type(() => GetTestimonialDto)
  @IsArray()
  @Expose()
  testimonials: GetTestimonialDto[];

  @ApiProperty({
    type: GetResourceDto,
    required: true,
    isArray: true,
  })
  @Type(() => GetResourceDto)
  @IsArray()
  @Expose()
  resources: GetResourceDto[];

  @ApiProperty({
    type: String,
    example: 'http://www.localhost/image1000.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Expose()
  scheduling_url?: string;

  @ApiProperty({
    type: GetLanguageDto,
    required: true,
    isArray: true,
  })
  @Type(() => GetLanguageDto)
  @Expose()
  languages: GetLanguageDto[];
}
