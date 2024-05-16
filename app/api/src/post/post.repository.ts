import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostRepository {
  @InjectRepository(Post)
  private repository: Repository<Post>;

  async findAll(): Promise<Post[]> {
    return this.repository.find();
  }

  async addPost(post: Post): Promise<Post> {
    return this.repository.save(post);
  }
}
