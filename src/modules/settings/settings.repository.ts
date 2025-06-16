import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/shared/database';
import { EntityManager, Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsRepository extends AbstractRepository<Setting> {
  protected readonly logger = new Logger(SettingsRepository.name);

  constructor(
    @InjectRepository(Setting) settingsRepository: Repository<Setting>,
    entityManager: EntityManager,
  ) {
    super(settingsRepository, entityManager);
  }
}
