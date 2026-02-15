import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  // Cloud Run expects the app to listen on the port provided by the environment
  const port = process.env.PORT || 3000; 
  
  await app.listen(port, '0.0.0.0'); // Use '0.0.0.0' to accept external traffic
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
