"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    createUser(createUserDto) {
        const { id, name, email, phone } = createUserDto;
        const user = new user_model_1.User(id, name, email, phone);
        this.users.push(user);
        return user;
    }
    updateUser(id, updateUserDto) {
        const user = this.getUserById(id);
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
    getUserById(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    deleteUserById(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('User not found');
        }
        this.users.splice(index, 1);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map