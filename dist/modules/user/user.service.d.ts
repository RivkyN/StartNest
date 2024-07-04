import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private users;
    createUser(createUserDto: CreateUserDto): User;
    updateUser(id: string, updateUserDto: UpdateUserDto): User;
    getUserById(id: string): User;
    deleteUserById(id: string): void;
}
