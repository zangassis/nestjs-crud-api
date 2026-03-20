import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() { email, name, password }: CreateUserDto) {
      return this.userService.create({ email, name, password });
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
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}