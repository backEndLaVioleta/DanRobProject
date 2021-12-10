import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        id: import("typeorm").ObjectID;
        userId: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        createdDate: Date;
        updatedDate: Date;
    }>;
    login(user: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
