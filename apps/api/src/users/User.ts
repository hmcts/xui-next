import {Role} from "../auth/enums/role.enum";

class User {
    userId: number;
    username: string;
    password: string;
    roles: Role[];
}
