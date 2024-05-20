import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'fox',
      password: '123456',
      database: 'shiyu-db',
      entities: ['dist/**/*.entity.js', 'dist/**/*.model.js'],
      // TODO: Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    UserModule,
    // PostModule,
  ],
})
export class AppModule {}
