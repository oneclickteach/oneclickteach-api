import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.getOrThrow('DATABASE_HOST'),
            port: configService.getOrThrow('DATABASE_PORT'),
            database: configService.getOrThrow('DATABASE_NAME'),
            username: configService.getOrThrow('DATABASE_USER'),
            password: configService.getOrThrow('DATABASE_PASSWORD'),
            synchronize:
              configService.getOrThrow<boolean>('DATABASE_SYNCHRONIZE', true),
            autoLoadEntities: configService.getOrThrow<boolean>(
              'DATABASE_AUTO_LOAD_ENTITIES',
              true,
            ),
          }),
          inject: [ConfigService],
        }),
      ],
    };
  }

  static forRootAsync(options: {
    useFactory: (configService: ConfigService) => Promise<{ database: string }>;
    inject: any[];
  }): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async (configService: ConfigService) => {
            const { database } = await options.useFactory(configService);
            return {
              type: 'postgres',
              host: configService.getOrThrow('DATABASE_HOST'),
              port: configService.getOrThrow('DATABASE_PORT'),
              database: database,
              username: configService.getOrThrow('DATABASE_USER'),
              password: configService.getOrThrow('DATABASE_PASSWORD'),
              synchronize:
                configService.getOrThrow<boolean>('DATABASE_SYNCHRONIZE', true),
              autoLoadEntities: configService.getOrThrow<boolean>(
                'DATABASE_AUTO_LOAD_ENTITIES',
                true,
              ),
            };
          },
          inject: options.inject,
        }),
      ],
    };
  }

  static forFeature(entities?: EntityClassOrSchema[]): DatabaseModule {
    return TypeOrmModule.forFeature(entities);
  }
}
