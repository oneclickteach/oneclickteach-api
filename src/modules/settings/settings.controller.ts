import { Controller, Get, Body, Patch } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Serialize } from 'src/common';
import { GetSettingDto } from './dto/get-setting.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { UpdateBasicInfoDto } from './dto/update-basic-info.dto';
import { UpdateTeachingPhilosophyDto } from './dto/update-teaching-philosophy.dto';
import { UpdateSocialLinksDto } from './dto/update-social-links.dto';
import { UpdateTestimonialsDto } from './dto/update-testimonials.dto';
import { UpdateResourcesDto } from './dto/update-resources.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) { }

  @Get()
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  getSetting() {
    return this.settingsService.getSetting();
  }

  @Patch()
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateOrCreateSetting(@Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateOrCreateSetting(updateSettingDto);
  }

  @Patch('basic-info')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateBasicInfo(@Body() updateBasicInfoDto: UpdateBasicInfoDto) {
    return this.settingsService.updateOrCreateSetting(updateBasicInfoDto as UpdateSettingDto);
  }

  @Patch('teaching-philosophy')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateTeachingPhilosophy(@Body() updateTeachingPhilosophyDto: UpdateTeachingPhilosophyDto) {
    return this.settingsService.updateOrCreateSetting(updateTeachingPhilosophyDto as UpdateSettingDto);
  }

  @Patch('social-links')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateSocialLinks(@Body() updateSocialLinksDto: UpdateSocialLinksDto) {
    return this.settingsService.updateOrCreateSetting(updateSocialLinksDto as UpdateSettingDto);
  }

  @Patch('testimonials')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateTestimonials(@Body() updateTestimonialsDto: UpdateTestimonialsDto) {
    return this.settingsService.updateOrCreateSetting(updateTestimonialsDto as UpdateSettingDto);
  }

  @Patch('resources')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateResources(@Body() updateResourcesDto: UpdateResourcesDto) {
    return this.settingsService.updateOrCreateSetting(updateResourcesDto as UpdateSettingDto);
  }

  @Patch('scheduling-url')
  @Serialize(GetSettingDto)
  @ApiOkResponse({
    type: GetSettingDto,
  })
  updateSchedulingUrl(@Body() updateSchedulingDto: UpdateSchedulingDto) {
    return this.settingsService.updateOrCreateSetting(updateSchedulingDto as UpdateSettingDto);
  } 
}
