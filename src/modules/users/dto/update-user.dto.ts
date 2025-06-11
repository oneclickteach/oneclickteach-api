import { ApiProperty } from '@nestjs/swagger';
import {
    IsEnum,
    IsOptional,
    IsString,
} from 'class-validator';
import { Gender } from 'src/common/enums/user.enum';

export class UpdateUserDto {
    @ApiProperty({
        example: 'Mahdad',
        required: false,
    })
    @IsString()
    @IsOptional()
    first_name?: string;

    @ApiProperty({
        example: 'Ghasemian',
        required: false,
    })
    @IsString()
    @IsOptional()
    last_name?: string;

    @ApiProperty({
        type: String,
        example: 'http://www.localhost/image1000.jpg',
        required: false,
    })
    @IsString()
    @IsOptional()
    avatar?: string;

    @ApiProperty({
        enum: Gender,
        default: Gender.UNKNOWN,
        required: true,
    })
    @IsEnum(Gender)
    gender?: Gender;
}
