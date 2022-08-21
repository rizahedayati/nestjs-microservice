import { Injectable } from '@nestjs/common';
import { CreatePostRequest } from './dto/create-post.request';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostsService {

  private readonly posts: Posts[] = [];

  createPost(post: CreatePostRequest): Posts {
    this.posts.push(post);
    return post;
  }

  findOne(id: number): Posts {
    return this.posts[id];
  }
  getHello(): string {
    return 'Hello World!';
  }
}
