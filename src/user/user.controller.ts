import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDto) {
    return { body };
  }

  @Get()
  async listAll() {
    return { users: [] };
  }

  @Get(':id')
  async listOne(@Param('id') id) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(@Body() body: UpdatePutUserDto, @Param() params) {
    return { user: {}, body };
  }

  @Patch(':id')
  async updateParcial(@Body() body: UpdatePatchUserDto, @Param() params) {
    return { user: {}, body };
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return { user: {}, id };
  }
}