import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts/posts.service';

@Module({
    controllers: [PostsController],
    providers:[PostsService],
})
export class PostsModule {}
