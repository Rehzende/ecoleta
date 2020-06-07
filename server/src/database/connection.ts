import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'mysql',
  version: '5.7',
  connection: {
    host : 'db',
    user : 'admin',
    password : 'admin',
    database : 'ecoleta'
  },
  useNullAsDefault: true,
});

export default connection;