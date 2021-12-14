"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const user_repository_1 = require("./user.repository");
const auth_service_1 = require("../auth/auth.service");
const access_token_type_1 = require("../auth/access-token.type");
let UsersService = class UsersService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.logger = new common_1.Logger('UsersService');
    }
    async signUp(createUserDto) {
        const user = await this.userRepository.signUp(createUserDto);
        return user;
    }
    async signIn(loginUserDto) {
        return await this.authService.signIn(loginUserDto);
    }
    async findAll() {
        try {
            return await this.userRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException('List not available.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOneById(id) {
        const user = await this.userRepository.findOne({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findOneByEmail(email) {
        if ((0, class_validator_1.isEmail)(email)) {
            const user = await this.userRepository.findOne({ email });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            return user;
        }
        else
            throw new common_1.HttpException('Not proper email format', common_1.HttpStatus.BAD_REQUEST);
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.userRepository.findOne({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        this.userRepository.remove(user);
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map