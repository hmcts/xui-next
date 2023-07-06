import {Role} from "../auth/enums/role.enum";

export class User {
    userId: number;
    username: string;
    password: string;
    token: string;
    roles: Role[];
    routes:string;
    defaultRoute: string;
}
