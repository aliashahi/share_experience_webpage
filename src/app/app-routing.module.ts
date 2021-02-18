import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/modules/simples/components/about-us/about-us.component';
import { CanActive } from './core/serivices/can-active.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [CanActive],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./athentication/athentication.module').then(
        (m) => m.AthenticationModule
      ),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
