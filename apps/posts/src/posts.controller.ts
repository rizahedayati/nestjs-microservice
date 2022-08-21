import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostRequest } from './dto/create-post.request';
import { PostsService } from './posts.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Posts } from './entities/post.entity';
@Controller()
@ApiBearerAuth()
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getHello(): string {
    return this.postsService.getHello();
  }

  @Post()
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Posts,
  })
  async createPost(@Body() createPostRequest: CreatePostRequest): Promise<Posts>  {
    return this.postsService.createPost(createPostRequest);
    
    
  }

  // @Get(':id')
  // @ApiResponse({
  //   status: 200,
  //   description: 'The found record',
  //   type: Posts,
  // })
  // findOne(@Param('id') id: string): Posts {
  //   return this.postsService.findOne(+id);
  // }
}
