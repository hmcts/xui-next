import { Injectable } from '@nestjs/common';
import {Role} from "../auth/enums/role.enum";

// This should be a real class/interface representing a user entity
export type User = any;

//TODO Replace with database if needed
@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Demo',
            password: 'demo',
        },
        {
            userId: 2,
            username: 'User',
            password: 'guess',
        },
        {
            userId: 2,
            username: 'Admin',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
