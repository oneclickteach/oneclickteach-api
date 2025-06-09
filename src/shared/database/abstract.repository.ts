import { Logger, NotFoundException } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import {
  EntityManager,
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { PickKeysByType } from 'typeorm/common/PickKeysByType';

export abstract class AbstractRepository<T extends AbstractEntity<T>> {
  protected abstract readonly logger: Logger;

  constructor(
    readonly entityRepository: Repository<T>,
    private readonly entityManager: EntityManager,
  ) { }

  async save(entity: T): Promise<T> {
    return this.entityManager.save(entity);
  }

  async create(entity: T): Promise<T> {
    return this.entityManager.save(entity);
  }

  async findOne(
    where: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T> {
    const entity = await this.entityRepository.findOne({ where, relations });

    if (!entity) {
      this.logger.warn('Entity not found with filterQuery', where);
      throw new NotFoundException('Entity not found.');
    }

    return entity;
  }

  async findOneAndUpdate(
    where: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ) {
    const updateResult = await this.entityRepository.update(
      where,
      partialEntity,
    );

    if (!updateResult.affected) {
      this.logger.warn('Entity not found with filterQuery', where);
      throw new NotFoundException('Entity not found.');
    }

    return this.findOne(where);
  }

  async update(
    where: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ) {
    return this.entityRepository.update(where, partialEntity);
  }

  async find(where: FindOptionsWhere<T>, relations?: FindOptionsRelations<T>) {
    return this.entityRepository.find({ where, relations });
  }

  async findAndCount(
    where: FindOptionsWhere<T>,
    order: object,
    skip: number,
    take: number,
  ) {
    return this.entityRepository.findAndCount({ where, order, skip, take });
  }

  async findBy(where: FindOptionsWhere<T>) {
    return this.entityRepository.findBy(where);
  }

  async findOneAndDelete(where: FindOptionsWhere<T>) {
    await this.entityRepository.softDelete(where);
  }

  async findLast(
    where: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T | null> {
    const entities = await this.entityRepository.find({
      where,
      order: { id: 'DESC' } as FindOptionsOrder<T>,
      take: 1,
      relations,
    });

    return entities?.length ? entities[0] : null;
  }

  async sum(
    columnName: PickKeysByType<T, number>,
    where: FindOptionsWhere<T>,
  ): Promise<number> {
    const sum = await this.entityRepository.sum(columnName, where);
    if (sum === null) {
      return 0;
    }
    return sum;
  }

  async count(): Promise<number> {
    return this.entityRepository.count();
  }

  async countBy(where: FindOptionsWhere<T>): Promise<number> {
    return this.entityRepository.countBy(where);
  }

  async runInTransaction<R>(run: () => Promise<R>): Promise<R> {
    return this.entityManager.transaction(run);
  }
}
