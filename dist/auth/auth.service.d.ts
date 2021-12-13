import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private logger;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
