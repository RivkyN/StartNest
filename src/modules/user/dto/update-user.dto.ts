// src/modules/user/dto/update-user.dto.ts

import { IsString, IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsPhoneNumber('IS') // 'ZZ' represents the country code (e.g., 'US' for United States)
  phone?: string;
}
