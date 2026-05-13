import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // Maps to POST /users
  create(@Body() createUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}