import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
const pormel = require('@marcospiriztorrez/test-pormel-package');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('pormel/api/v1/');

	const PORT = AppModule.port || 3001;

	pormel();

	await app.listen(PORT, '0.0.0.0');
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
