import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingsRepository } from './settings.repository';
import { LoggerModule } from 'src/shared/logger';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/shared/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { Language } from './entities/language.entity';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule,
    DatabaseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        database: configService.getOrThrow('DATABASE_NAME'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Setting, Language]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService, SettingsRepository],
  exports: [SettingsService]
})
export class SettingsModule { }
