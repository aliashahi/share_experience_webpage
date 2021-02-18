import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthenticationComponent } from './components/athentication/athentication.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../core/modules/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: AthenticationComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-in',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AthenticationComponent, SignUpComponent, SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class AthenticationModule {}
