/* eslint-disable*/
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID } from 'typeorm';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>
    ){}

    // endPoints

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    @Get(':id')
    async getOneUser(@Param('id') id: number): Promise<User>{
        const user = ObjectID.isValid(id) && await this.userRepository.findOne(id)
        return user;
    }
    
    @Post()
    async newUser(@Body() user: Partial<User>): Promise<User>{
        return await this.userRepository.save(new User(user))
    }
}
