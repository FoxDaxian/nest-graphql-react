import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { Post as PostT } from './post.entity';
import { UserRepository } from './user.repository';
import { PostRepository } from './post.repository';

@Controller()
export class AppController {
  @Inject()
  private appService: AppService;

  @Inject()
  private userRepository: UserRepository;

  @Inject()
  private postRepository: PostRepository;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/alluser')
  async getAllUser(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  @Post('/addser')
  async addNewUser(@Body() user: User): Promise<User> {
    return await this.userRepository.addUser(user);
  }

  @Get('/allpost')
  async getAllPost(): Promise<PostT[]> {
    return await this.postRepository.findAll();
  }

  @Post('/addpost')
  async addNewPost(@Body() post: PostT): Promise<PostT> {
    return await this.postRepository.addPost(post);
  }
}
