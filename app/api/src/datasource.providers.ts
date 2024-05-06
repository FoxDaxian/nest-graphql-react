import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';

// TODO: different provide so must pass token in @inject(/* token */)
export const datasourceProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];