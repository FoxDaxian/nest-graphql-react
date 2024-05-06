import { Module } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { DatasourceModule } from './datasource.module';

@Module({
  imports: [DatasourceModule],
  providers: [
    PostRepository,
  ],
  exports: [PostRepository],
})
export class PostModule {}