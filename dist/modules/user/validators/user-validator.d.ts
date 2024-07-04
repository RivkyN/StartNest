import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UserValidator {
    validateCreateUserDto(dto: CreateUserDto): Promise<void>;
    validateUpdateUserDto(dto: UpdateUserDto): Promise<void>;
}
