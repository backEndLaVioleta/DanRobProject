import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
export declare class UsersService {
    private userRepository;
    private logger;
    constructor(userRepository: UserRepository);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOneById(id: string): Promise<import("./entities/user.entity").User>;
    findOneByEmail(email: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<import("./entities/user.entity").User>;
}
