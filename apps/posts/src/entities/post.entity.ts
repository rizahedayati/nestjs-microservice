import { ApiProperty } from '@nestjs/swagger';

export class Posts {
 

  @ApiProperty({ example: "title", description: 'title of post' })
  title: string;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  caption: string;
}