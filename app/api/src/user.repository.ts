import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>;

    async findAll(): Promise<User[]> {
        return this.repository.find();
    }

    async addUser(user: User): Promise<User> {
        return this.repository.save(user);
    }
}