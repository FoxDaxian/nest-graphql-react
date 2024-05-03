import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>;

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async addUser(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}