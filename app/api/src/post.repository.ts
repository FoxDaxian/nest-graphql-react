import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostRepository {
    @Inject('POST_REPOSITORY')
    private repository: Repository<Post>;

    async findAll(): Promise<Post[]> {
        return this.repository.find();
    }

    async addPost(post: Post): Promise<Post> {
        return this.repository.save(post);
    }
}