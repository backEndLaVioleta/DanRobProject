import { Strategy } from 'passport-jwt';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';
import { JwtPayload } from './jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
