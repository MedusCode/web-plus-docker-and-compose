import * as Joi from 'joi';
import configFactory from '../utils/factories/configFactory';

const databaseConfigSchema = Joi.object({
  host: Joi.string().required(),
  port: Joi.number().integer().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  database: Joi.string().required(),
  synchronize: Joi.boolean().required(),
});

const databaseConfig = () => ({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV === 'development',
});

export default configFactory('database', databaseConfig, databaseConfigSchema);
