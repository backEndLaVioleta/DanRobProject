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
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const class_validator_1 = require("class-validator");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(body) {
        const users = await this.userRepository.find({ email: body.email });
        if (users.length) {
            throw new common_1.BadRequestException('Email already in use');
        }
        const user = this.userRepository.create(body);
        return await this.userRepository.save(user);
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
        const user = await this.userRepository.findOne({ userId: id });
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
        const user = await this.userRepository.findOne({ userId: id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.userRepository.findOne({ userId: id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.userRepository.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map