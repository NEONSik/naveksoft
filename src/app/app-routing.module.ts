import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './core/guards/auth-service.service';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./core/pages/start-page/start-page.module').then(m => m.StartPageModule)
}, {
  path: 'dashboard',
  loadChildren: () => import('./core/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
