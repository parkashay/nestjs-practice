import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import posts from 'src/data/posts';
import { PostDTO } from '../dtos/Post.dto';

@Controller('posts')
export class PostsController {
  // get all posts or Get posts filtered by keywords passed as query
  @Get()
  getPosts(@Query('keywords') keywords: string) {
    if (keywords) {
      const keywordsArray = keywords.split(','); // split the query string into array

      // filter the posts according to the keywords
      const filteredPosts = keywordsArray.map((keyword) => {
        return posts.filter((post) => post.keywords.includes(keyword));
      });
      if (filteredPosts.length > 0) {
        return filteredPosts;
      } else {
        return { result: 'none' };
      }
    }

    // if no keywords are provided, return all posts
    return posts;
  }

  // Create a new post
  @Post('/create')
  addPost(@Body() newPost: PostDTO) {
    const id = randomUUID();
    const title = newPost.title;
    const keywords = newPost.keywords;
    const content = newPost.content;
    posts.push({
      id,
      title,
      keywords,
      content,
    });
    return {
      newPost,
    };
  }
}
