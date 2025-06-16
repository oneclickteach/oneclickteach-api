import { Injectable } from '@nestjs/common';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingsRepository } from './settings.repository';
import { DEFAULT_SETTING } from 'src/common';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    private readonly settingsRepository: SettingsRepository,
  ) { }

  async getSetting() {
    try {
      const setting = await this.settingsRepository.findOne({});
      return setting;
    } catch (error) {
      return DEFAULT_SETTING;
    }
  }

  async updateOrCreateSetting(updateSettingDto: UpdateSettingDto) {
    let setting;

    try {
      setting = await this.settingsRepository.findOne({});
    } catch (error) {
    }

    if (setting) {
      await this.settingsRepository.findOneAndUpdate({ id: setting.id }, updateSettingDto)
    } else {
      const setting = Object.assign(new Setting({}), updateSettingDto);
      await this.settingsRepository.save(setting);
    }

    return this.getSetting();
  }
}
