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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExist = exports.UserAlreadyExistConstraint = void 0;
const class_validator_1 = require("class-validator");
const users_service_1 = require("../../users/users.service");
let UserAlreadyExistConstraint = class UserAlreadyExistConstraint {
    constructor(userService) {
        this.userService = userService;
    }
    async validate(email) {
        try {
            const user = await this.userService.findOneByEmail(email);
            console.log(user);
            console.log('You are passing though the decorator');
            if (user.length)
                return false;
            return true;
        }
        catch (error) {
            throw new Error(`${error.message}`);
        }
    }
    defaultMessage(_args) {
        return 'User already exist';
    }
};
UserAlreadyExistConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserAlreadyExistConstraint);
exports.UserAlreadyExistConstraint = UserAlreadyExistConstraint;
function UserAlreadyExist(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UserAlreadyExistConstraint,
        });
    };
}
exports.UserAlreadyExist = UserAlreadyExist;
//# sourceMappingURL=emailValidation.js.map