import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostRequest {

  @ApiProperty({ example: "title", description: 'title of post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  @IsString()
  @IsNotEmpty()
  caption: string;
}




