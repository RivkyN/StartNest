// src/modules/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserValidator } from './validators/user-validator'; // Import the validator
import { CreateUserDto } from './dto/create-user.dto';

@Module({
  controllers: [UserController],
  providers: [UserService, UserValidator], // Provide the validator
})
export class UserModule {}
