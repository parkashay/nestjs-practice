import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProtectedController } from '../controllers/protected/protected.controller';
import { ProtectedMiddleware } from '../middlewares/protected/protected.middleware';

@Module({
  controllers: [ProtectedController],
})
export class ProtectedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectedMiddleware).forRoutes(ProtectedController);
  }
}
