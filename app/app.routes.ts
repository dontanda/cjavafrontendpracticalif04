import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'productos',
        loadChildren: () => import('./mproductos/mproductos.module').then(m => m.MproductosModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./musuarios/musuarios.module').then(m => m.MusuariosModule)
    },
    {
        path: '**',
        redirectTo: 'productos'
    }
];
