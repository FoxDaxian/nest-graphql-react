import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  @InjectRepository(User)
  private repository: Repository<User>;

  async findById(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async addUser(user: User): Promise<User> {
    return this.repository.save(user);
  }
}
