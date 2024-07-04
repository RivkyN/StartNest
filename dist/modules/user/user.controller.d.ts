import { UserService } from './user.service';
import { UserValidator } from './validators/user-validator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    private readonly userValidator;
    constructor(userService: UserService, userValidator: UserValidator);
    createUser(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    getUserById(id: string): import("./user.model").User;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.model").User>;
    deleteUserById(id: string): void;
}
