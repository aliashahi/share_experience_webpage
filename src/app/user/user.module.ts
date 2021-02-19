import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { NotFoundPageComponent } from '../core/modules/simples/components/not-found-page/not-found-page.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'new',
        component: CreateFormComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [UserComponent, CreateFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class UserModule {}
