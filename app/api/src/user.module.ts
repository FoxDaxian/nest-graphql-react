import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { userProviders } from './user.providers';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserRepository,
  ],
  exports: [UserRepository],
})
export class UserModule {}