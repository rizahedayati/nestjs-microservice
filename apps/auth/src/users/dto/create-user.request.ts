import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequest {
  @ApiProperty({ example: "h@h.com", description: 'email for signup' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Reza132", description: 'password for signup' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
