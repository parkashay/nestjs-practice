import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { App } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { ProtectedModule } from './protected/protected/protected.module';
import { ProtectedController } from './protected/controllers/protected/protected.controller';
import { ProtectedService } from './protected/services/protected/protected.service';


@Module({
  imports: [UsersModule, PostsModule, ProtectedModule],
  controllers: [App],
  providers: [ProtectedService],
})
export class AppModule {}
