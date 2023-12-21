import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from 'src/dtos/createpost.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService){}
    @Get()
    getPosts(){
        return this.postService.getPosts()
    }

    @Post('/create')
    @UseGuards(AuthGuard)
    @UsePipes(ValidationPipe)
    createPost(@Body() newPost: CreatePostDto, @Req() request: Request){
        const userId = request['user'].id
        return this.postService.createPost(newPost, userId);
    }
}

