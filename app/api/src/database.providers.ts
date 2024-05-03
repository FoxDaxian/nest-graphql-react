import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'fox',
                password: '123456',
                database: 'shiyu-db',
                entities: [
                    'dist/**/*.entity.js'
                ],
                // TODO: Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];