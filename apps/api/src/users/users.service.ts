import { Injectable } from '@nestjs/common';

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
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiRGVtbyIsImlhdCI6MTY4NzQzMjk0NywiZXhwIjoxNjg3NDMzMDA3fQ.-0tGeYqPocryOmWHTJUrjcvrU7hyo2rEtuxgj-tsHrs',
            Role:['Admin'],
            routes: `[{
                    path: 'login',
                    loadChildren: () =>
                        loadRemoteModule('idam','./Module').then(
                            (m) => m.RemoteEntryModule),
                },
                {
                    path: 'manage-organisations',
                    canActivate:[authGuard],
                    loadChildren: () =>
                        loadRemoteModule('manage-organisations','./Module').then((m) => m.RemoteEntryModule),
                },
                {
                    path: 'manage-cases',
                    canActivate:[authGuard],
                    loadChildren: () =>
                        loadRemoteModule('manage-cases','./Module').then((m) => m.RemoteEntryModule),
                },
                {
                    path: 'show-cases',
                    canActivate:[authGuard],
                    loadChildren: () =>
                        loadRemoteModule('show-cases','./Module').then((m) => m.RemoteEntryModule),
                },
                {
                    path: 'notAuthorised',
                    loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.RemoteEntryModule),
                },
                {
                    path: 'idam',
                    loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.RemoteEntryModule),
                },
                {
                    path: '',
                    loadChildren: () => loadRemoteModule('idam','./Module').then((m) => m.RemoteEntryModule),
                }]`,
            defaultRoute: 'manage-cases'
        },
        {
            userId: 2,
            username: 'User',
            password: 'guess',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiVXNlciIsImlhdCI6MTY4NzQzNDEwMSwiZXhwIjoxNjg3NDM0MTYxfQ.3nHir06eWa4S05yp4Wr60Yp-N_CYnY-ZTTcbXSA-LzE',
            defaultRoute: 'show-cases'
        },
        {
            userId: 2,
            username: 'Admin',
            password: 'guess',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODc0MzU4NzYsImV4cCI6MTY4NzQzNTkzNn0.t7DvNHCrxX3Ab60e42i_RdCJY0lP5n3pj22oK244clM',
            defaultRoute: 'manage-organisations'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findToken(token: string): Promise<User | undefined> {
        return this.users.find(user => user.token === token);
    }

}
