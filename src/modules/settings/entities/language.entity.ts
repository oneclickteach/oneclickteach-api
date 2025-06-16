import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "src/shared/database";
import { LanguageCode, LanguageDirection, LanguageInterface, LanguageTranslationInterface } from "src/common";
import { Setting } from "./setting.entity";

@Entity('languages')
export class Language extends AbstractEntity<Language> implements LanguageInterface {
    @Column({ type: 'enum', enum: LanguageCode, default: LanguageCode.EN })
    code: LanguageCode;
    
    @Column()
    name: string;

    @Column()
    native_name: string;

    @Column({ type: 'enum', enum: LanguageDirection, default: LanguageDirection.LTR })
    direction: LanguageDirection;

    @Column()
    is_default: boolean;

    @Column()
    is_active: boolean;

    @Column()
    flag_emoji: string;

    @Column({ type: 'jsonb', default: [] })
    translations: LanguageTranslationInterface[];

    @ManyToOne(() => Setting, (setting) => setting.languages, {onDelete: 'CASCADE'})
    setting: Setting;
}