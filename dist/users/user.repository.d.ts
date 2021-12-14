import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserRepository extends Repository<User> {
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(email: string, password: string): Promise<User>;
    private hashPassword;
    private validateUserPassword;
}
