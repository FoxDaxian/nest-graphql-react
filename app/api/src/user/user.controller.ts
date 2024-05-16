import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Controller()
export class UserController {
  @Inject()
  private repository: UserRepository;

  @Get('/alluser')
  async getAllUser(): Promise<User[]> {
    return await this.repository.findAll();
  }

  @Post('/addser')
  async addNewUser(@Body() user: User): Promise<User> {
    return await this.repository.addUser(user);
  }
}
