import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AccessTokenType } from 'src/auth/access-token.type';
export declare class UsersService {
    private userRepository;
    private authService;
    private logger;
    constructor(userRepository: UserRepository, authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(loginUserDto: LoginUserDto): Promise<AccessTokenType>;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
