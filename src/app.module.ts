import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { App } from './app.controller';
import { PostsController } from './posts/controllers/posts.controller';


@Module({
  imports: [UsersModule],
  controllers: [App, PostsController],
  providers: [],
})
export class AppModule {}
