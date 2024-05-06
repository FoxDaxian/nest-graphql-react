import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { datasourceProviders } from './datasource.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...datasourceProviders,
  ],
  exports: [...datasourceProviders],
})
export class DatasourceModule {}