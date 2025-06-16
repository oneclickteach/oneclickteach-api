import { LanguageCode, LanguageDirection, LanguageInterface } from "src/common";
import { IsBoolean, IsEnum, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { CreateLanguageTranslationDto } from "./create-language-translation.dto";

export class CreateLanguageDto {
    @ApiProperty({
        enum: LanguageCode,
        default: LanguageCode.EN,
        required: true,
    })
    @IsEnum(LanguageCode)
    code: LanguageCode;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    native_name: string;

    @ApiProperty({
        enum: LanguageDirection,
        default: LanguageDirection.LTR,
        required: true,
    })
    @IsEnum(LanguageDirection)
    direction: LanguageDirection;

    @ApiProperty({
        type: Boolean,
        example: true,
        required: true,
    })
    @IsBoolean()
    is_default: boolean;

    @ApiProperty({
        type: Boolean,
        example: true,
        required: true,
    })
    @IsBoolean()
    is_active: boolean;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    flag_emoji: string;

    @ApiProperty({
        type: CreateLanguageTranslationDto,
        required: true,
        isArray: true
    })
    @Type(() => CreateLanguageTranslationDto)
    translations: CreateLanguageTranslationDto[];
}
