import { Module } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostRepository],
  controllers: [PostController],
})
export class PostModule {}
