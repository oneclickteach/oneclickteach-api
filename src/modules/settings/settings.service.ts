import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingsRepository } from './settings.repository';
import { DEFAULT_SETTING } from 'src/common';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(private readonly settingsRepository: SettingsRepository) {}

  async getSetting() {
    try {
      const setting = await this.settingsRepository.findOne({});
      return setting;
    } catch (_error) {
      return DEFAULT_SETTING;
    }
  }

  async updateOrCreateSetting(updateSettingDto: UpdateSettingDto) {
    let setting: Setting | null = null;

    try {
      setting = await this.settingsRepository.findOne({});
    } catch (_error) {
      //
    }

    if (setting) {
      await this.settingsRepository.findOneAndUpdate(
        { id: setting.id },
        updateSettingDto,
      );
    } else {
      try {
        const normalizedDto = this.normalizeSettingDto(updateSettingDto);
        const setting = Object.assign(new Setting({}), normalizedDto);
        await this.settingsRepository.save(setting);
      } catch (_error) {
        throw new InternalServerErrorException('Could not create setting');
      }
    }

    return this.getSetting();
  }

  private normalizeSettingDto(
    dto: Partial<UpdateSettingDto>,
  ): UpdateSettingDto {
    return {
      name: dto.name ?? '',
      tagline: dto.tagline ?? '',
      profile_picture_url: dto.profile_picture_url ?? '',
      bio_summary: dto.bio_summary ?? '',
      teaching_philosophy: dto.teaching_philosophy ?? '',
      contact_email: dto.contact_email ?? '',
      social_links: {
        linkedin: dto.social_links?.linkedin ?? '',
        twitter: dto.social_links?.twitter ?? '',
        telegram: dto.social_links?.telegram ?? '',
        whatsapp: dto.social_links?.whatsapp ?? '',
      },
      testimonials: dto.testimonials ?? [],
      resources: dto.resources ?? [],
    };
  }
}
