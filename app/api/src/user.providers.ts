import { DataSource } from 'typeorm';
import { User } from './user.entity';

// TODO: different provide so must pass token in @inject(/* token */)
export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];