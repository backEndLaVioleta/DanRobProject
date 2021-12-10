import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        id: import("typeorm").ObjectID;
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
        isAdmin: boolean;
        createdDate: Date;
        updatedDate: Date;
    }>;
    login(user: UserDto): Promise<{
        access_token: string;
    }>;
}
