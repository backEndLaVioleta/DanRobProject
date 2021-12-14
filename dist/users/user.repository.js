"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = __importStar(require("bcrypt"));
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(createUserDto) {
        const { firstName, lastName, email, password } = createUserDto;
        const user = this.create();
        user.id = (0, uuid_1.v4)();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = await this.hashPassword(password);
        user.isAdmin = true;
        try {
            return await this.save(user);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Email already exists');
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async signIn(email, password) {
        const user = await this.findOne({ email });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user && (await this.validateUserPassword(password, user.password))) {
            console.log(user, 'from user repository');
            return user;
        }
        else {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async validateUserPassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map