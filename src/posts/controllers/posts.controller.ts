import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostDTO } from '../dtos/Post.dto';
import { PostsService } from '../services/posts/posts.service';

@Controller('posts')
export class PostsController {
  private postService = new PostsService();
  @Get()
  getPosts(@Query('keywords') keywords: string) {
    return this.postService.getPosts(keywords);
  }

  // get a single post by slug
  @Get(':slug')
  getPostBySlug(@Param('slug') slug: string) {
    return this.postService.getPostsBySlug(slug);
  }

  // Create a new post
  @Post('/create')
  @UsePipes(new ValidationPipe())
  addPost(@Body() newPost: PostDTO) {
    return this.postService.createNewPost(newPost);
  }
}
