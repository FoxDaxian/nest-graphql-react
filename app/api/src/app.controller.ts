import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Controller()
export class AppController {
  @Inject()
  private appService: AppService;

  @Inject()
  private userservice: UserRepository;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/alluser')
  async getAllUser(): Promise<User[]> {
    console.log('12');
    return await this.userservice.findAll();
  }

  @Post('/adduser')
  async addNewUser(@Body() user: User): Promise<User> {
    return await this.userservice.addUser(user);
  }
}
