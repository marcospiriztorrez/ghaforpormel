import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
	type: 'oracle',
    sid: configService.get<string>('DB_NAME'),
	host: configService.get<string>('DB_HOST'),
	port: configService.get<number>('DB_PORT'),
	username: configService.get<string>('DB_USER'),
	password: configService.get<string>('DB_PASS'),
	migrations: [],
	migrationsTableName: 'migrations',
	synchronize: true,
});