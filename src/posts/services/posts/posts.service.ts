import { Injectable, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';
import posts from 'src/data/posts';
import { PostDTO } from 'src/posts/dtos/Post.dto';

@Injectable()
export class PostsService {
  // get all posts or posts by search query using keywords
  getPosts(keywords: string) {
    if (keywords) {
      const keywordsArray = keywords.split(','); // split the query string into array

      var filteredPosts = [];

      keywordsArray.forEach((keyword) => {
        posts.forEach((post) => {
          if (
            post.keywords.includes(keyword) &&
            !filteredPosts.includes(post)
          ) {
            filteredPosts.push(post);
          }
        });
      });

      if (filteredPosts.length > 0) {
        return {result:true, filteredPosts};
      } else {
        return { result: false };
      }
    }
    // if no keywords are provided, return all posts
    return posts;
  }

  // get posts by slug
  getPostsBySlug(slug: string) {
    const postBySlug = posts.find((post) => post.slug === slug);
    if (postBySlug) {
      return { result: true, postBySlug };
    }
    return { result: false };
  }

  // create a new post
  createNewPost(newPost: PostDTO){
    const id = randomUUID();
    const title = newPost.title;
    const slug = newPost.title.replace(/ /g, '-');
    const keywords = newPost.keywords;
    const content = newPost.content;
    posts.push({
      id,
      title,
      slug,
      keywords,
      content,
    });
    return {
      newPost,
    };
  }
}
