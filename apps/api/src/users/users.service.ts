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
            defaultRoute: 'manage-organisations'
        },
        {
            userId: 2,
            username: 'User',
            password: 'guess',
            defaultRoute: 'show-cases'
        },
        {
            userId: 2,
            username: 'Admin',
            password: 'guess',
            defaultRoute: 'manage-cases'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
