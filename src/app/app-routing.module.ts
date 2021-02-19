import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/modules/simples/components/about-us/about-us.component';
import { NotFoundPageComponent } from './core/modules/simples/components/not-found-page/not-found-page.component';
import { CanActive } from './core/serivices/can-active.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
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
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
