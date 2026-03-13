import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body){
    return { body };
  }

  @Get()
  async listAll() {
    return {users:[]}
  }

  @Get(':id')
  async listOne(@Param('id') id){
    return {user:{}, id}
  }
}