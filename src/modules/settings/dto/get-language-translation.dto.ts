import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { AbstractGetDto } from 'src/common/dto/abstract-get.dto';

export class GetLanguageTranslationDto extends AbstractGetDto {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: true,
    })
    @IsString()
    @Expose()
    language_id: string;

    @ApiProperty({
        example: 'Welcome',
        required: true,
    })
    @IsString()
    @Expose()
    welcome: string;

    @ApiProperty({
        example: 'Features',
        required: true,
    })
    @IsObject()
    @Expose()
    features: {
        title: string;
        description: string;
        list: {
            profile: string;
            schedule: string;
            resources: string;
            students: string;
            analytics: string;
        };
    };

    @ApiProperty({
        example: 'Contact',
        required: true,
    })
    @IsObject()
    @Expose()
    contact: {
        title: string;
        email: string;
        phone: string;
    };

    @ApiProperty({
        example: 'Home',
        required: true,
    })
    @IsObject()
    @Expose()
    home: {
        title: string;
        subtitle: string;
        cta: string;
        description: string;
        features: {
            title: string;
            items: {
                easy: string;
                flexible: string;
                resources: string;
                community: string;
            };
        };
    };

    @ApiProperty({
        example: 'Profile',
        required: true,
    })
    @IsObject()
    @Expose()
    profile: {
        title: string;
        subtitle: string;
        sections: {
            basicInfo: {
                title: string;
                description: string;
            };
            teachingPhilosophy: {
                title: string;
                description: string;
            };
            contact: {
                title: string;
                description: string;
            };
        };
        fields: {
            name: string;
            email: string;
            phone: string;
            language: string;
            bio: string;
            save: string;
        };
    };

    @ApiProperty({
        example: 'Languages',
        required: true,
    })
    @IsObject()
    @Expose()
    languages: {
        title: string;
        subtitle: string;
        status: string;
        error: {
            updateLanguage: string;
        };
    };

    @ApiProperty({
        example: 'Schedule',
        required: true,
    })
    @IsObject()
    @Expose()
    schedule: {
        title: string;
        subtitle: string;
        actions: {
            add: string;
            edit: string;
            delete: string;
        };
    };

    @ApiProperty({
        example: 'Resources',
        required: true,
    })
    @IsObject()
    @Expose()
    resources: {
        title: string;
        subtitle: string;
        types: {
            documents: string;
            videos: string;
            links: string;
            notes: string;
        };
    };

    @ApiProperty({
        example: 'Students',
        required: true,
    })
    @IsObject()
    @Expose()
    students: {
        title: string;
        subtitle: string;
        actions: {
            add: string;
            view: string;
            progress: string;
        };
    };

    @ApiProperty({
        example: 'Analytics',
        required: true,
    })
    @IsObject()
    @Expose()
    analytics: {
        title: string;
        subtitle: string;
        metrics: {
            sessions: string;
            students: string;
            resources: string;
            progress: string;
        };
    };

    @ApiProperty({
        example: 'Common',
        required: true,
    })
    @IsObject()
    @Expose()
    common: {
        save: string;
        cancel: string;
        delete: string;
        edit: string;
        add: string;
        view: string;
        update: string;
        settings: string;
        help: string;
        logout: string;
    };

}
