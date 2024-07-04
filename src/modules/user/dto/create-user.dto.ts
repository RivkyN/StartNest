// src/modules/user/dto/create-user.dto.ts

import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';


export class CreateUserDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('US') // 'ZZ' represents the country code (e.g., 'US' for United States)
    phone: string;
}
