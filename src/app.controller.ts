import { Controller, Get } from "@nestjs/common";
import { PostsService } from "./posts/posts.service";

@Controller()
export class App {
    constructor(private postService: PostsService){}
    @Get()
    homeData(){
        const posts = this.postService.getPosts();
        return {
            posts
        }
    }
}