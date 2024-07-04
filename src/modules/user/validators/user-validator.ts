
import { Injectable, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserValidator {
  async validateCreateUserDto(dto: CreateUserDto): Promise<void> {
    const userDto = plainToClass(CreateUserDto, dto);
    const errors = await validate(userDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  async validateUpdateUserDto(dto: UpdateUserDto): Promise<void> {
    const userDto = plainToClass(UpdateUserDto, dto);
    const errors = await validate(userDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }
}

