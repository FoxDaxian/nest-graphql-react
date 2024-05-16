import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Post as PostT } from './post.entity';
import { PostRepository } from './post.repository';

@Controller()
export class PostController {
  @Inject()
  private repository: PostRepository;

  @Get('/allpost')
  async getAllPost(): Promise<PostT[]> {
    return await this.repository.findAll();
  }

  @Post('/addpost')
  async addNewPost(@Body() post: PostT): Promise<PostT> {
    return await this.repository.addPost(post);
  }
}
