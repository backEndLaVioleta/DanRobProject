import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from '../auth/auth.service';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    private logger;
    constructor(usersService: UsersService, authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    test(user: User): User;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: string, body: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
