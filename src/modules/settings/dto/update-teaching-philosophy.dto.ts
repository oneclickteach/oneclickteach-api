import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTeachingPhilosophyDto {
  @ApiProperty({
    type: String,
    required: true,
    example: "I believe language learning should be an immersive and enjoyable adventure. My methodology integrates communicative approaches with cultural insights, ensuring students not only learn the language but also appreciate its context. I foster a supportive environment where mistakes are learning opportunities, and progress is celebrated.",
  })
  @IsString()
  teaching_philosophy: string;
}
