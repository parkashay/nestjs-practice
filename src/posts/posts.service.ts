import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import posts from 'src/data/posts';
import { CreatePostDto } from 'src/dtos/createpost.dto';
import { UserPost } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(UserPost)
    private postsRepository: Repository<UserPost>,
  ) {}
  getPosts() {
    return posts;
  }

  async createPost(newPost: CreatePostDto, userId: number) {
    try {
      const post = this.postsRepository.create({
        title: newPost.title,
        content: newPost.content,
        user: { id: userId },
      });
      await this.postsRepository.save(post);
      return post;
    } catch(err) {
      throw new Error(err);
    }
  }
}
