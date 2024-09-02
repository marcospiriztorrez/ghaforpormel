import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = AppModule.port || 3001;

  await app.listen(PORT);
}
bootstrap();
