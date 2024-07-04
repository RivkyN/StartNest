// src/modules/user/user.controller.ts

import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserValidator } from './validators/user-validator'; // Import the validator
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; // Import the UpdateUserDto

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userValidator: UserValidator, // Inject the validator
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userValidator.validateCreateUserDto(createUserDto); // Validate DTO
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    await this.userValidator.validateUpdateUserDto(updateUserDto); // Validate DTO
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
