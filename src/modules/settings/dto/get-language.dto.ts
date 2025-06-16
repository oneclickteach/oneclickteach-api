import { AbstractGetDto } from "src/common/dto/abstract-get.dto";
import { LanguageCode, LanguageDirection } from "src/common";
import { IsBoolean, IsEnum, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { GetLanguageTranslationDto } from "./get-language-translation.dto";

export class GetLanguageDto extends AbstractGetDto {
    @ApiProperty({
        enum: LanguageCode,
        default: LanguageCode.EN,
        required: true,
    })
    @IsEnum(LanguageCode)
    @Expose()
    code: LanguageCode;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    @Expose()
    name: string;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    @Expose()
    native_name: string;

    @ApiProperty({
        enum: LanguageDirection,
        default: LanguageDirection.LTR,
        required: true,
    })
    @IsEnum(LanguageDirection)
    @Expose()
    direction: LanguageDirection;

    @ApiProperty({
        type: Boolean,
        example: true,
        required: true,
    })
    @IsBoolean()
    @Expose()
    is_default: boolean;

    @ApiProperty({
        type: Boolean,
        example: true,
        required: true,
    })
    @IsBoolean()
    @Expose()
    is_active: boolean;

    @ApiProperty({
        type: String,
        example: 'English',
        required: true,
    })
    @IsString()
    @Expose()
    flag_emoji: string;

    @ApiProperty({
        type: GetLanguageTranslationDto,
        required: true,
        isArray: true
    })
    @Type(() => GetLanguageTranslationDto)
    @Expose()
    translations: GetLanguageTranslationDto[];
}
