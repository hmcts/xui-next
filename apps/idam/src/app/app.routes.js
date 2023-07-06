export const appRoutes = [
    {
        path: '',
        loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
    },
    {
        path: 'notAuthorised',
        loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
    },
];
//# sourceMappingURL=app.routes.js.map