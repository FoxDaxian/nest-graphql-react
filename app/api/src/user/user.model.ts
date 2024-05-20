import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
// import { Post } from './post';

@ObjectType()
@Entity()
@Unique(['email'])
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

//   @Field(type => [Post])
//   posts: Post[];
}
