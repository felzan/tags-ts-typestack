import * as client from "knex";

export const knex: client = client({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'tags'
    },
    pool: {
        min: 2,
        max: 10
    },
    debug: true,
});

