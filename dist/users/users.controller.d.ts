import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    create(body: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(body: UserDto): Promise<{
        access_token: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOneById(id: string): Promise<import("./entities/user.entity").User>;
    findByEmail(email: string): Promise<import("./entities/user.entity").User>;
    update(id: string, body: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<import("./entities/user.entity").User>;
}
