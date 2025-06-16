import { Column, Entity, OneToMany } from "typeorm";
import { AbstractEntity } from "src/shared/database";
import { ResourceInterface, SettingInterface, TestimonialInterface } from "src/common";
import { Language } from "./language.entity";

@Entity('settings')
export class Setting extends AbstractEntity<Setting> implements SettingInterface {
    @Column()
    name: string;

    @Column()
    tagline: string;

    @Column()
    profile_picture_url: string;

    @Column()
    bio_summary: string;

    @Column()
    teaching_philosophy: string;

    @Column()
    contact_email: string;

    @Column({ type: 'jsonb' })
    social_links: {
        linkedin: string,
        twitter: string,
        telegram: string,
        whatsapp: string
    };

    @Column({ type: 'jsonb', default: [] })
    testimonials: TestimonialInterface[];

    @Column({ type: 'jsonb', default: [] })
    resources: ResourceInterface[];

    @Column({ nullable: true })
    scheduling_url?: string;

    @OneToMany(() => Language, (language) => language.setting, { cascade: true, eager: true })
    languages?: Language[];
}
