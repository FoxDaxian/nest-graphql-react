import {
  Resolver,
  Args,
  Int,
  //   ResolveField,
  //   Parent,
  Query,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserRepository } from './user.repository';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userRepository: UserRepository,
    // private postsService: PostsService,
  ) {}

  @Query(() => User, {name: 'user'})
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.userRepository.findById(id);
  }

  //   @ResolveField()
  //   async posts(@Parent() author: User) {
  //     const { id } = author;
  //     return this.postsService.findAll({ authorId: id });
  //   }
}
