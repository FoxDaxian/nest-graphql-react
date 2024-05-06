import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatasourceModule],
  providers: [
    UserRepository,
  ],
  exports: [UserRepository],
})
export class UserModule { }