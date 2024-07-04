// src/modules/user/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(createUserDto: CreateUserDto): User {
    const { id, name, email, phone } = createUserDto;
    const user = new User(id , name, email, phone);
    this.users.push(user);
    return user;
  }


  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.getUserById(id); // Check if user exists
    // Update user properties
    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }
    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }
    if (updateUserDto.phone) {
      user.phone = updateUserDto.phone;
    }
    return user;
  }


  getUserById(id: string): User {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  deleteUserById(id: string): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(index, 1);
  }
}

