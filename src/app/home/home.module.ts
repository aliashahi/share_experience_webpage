import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { SimplesModule } from '../core/modules/simples/simples.module';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CardViewComponent } from './components/list-view/card-view/card-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, CarouselComponent, ListViewComponent, CardViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SimplesModule,
  ],
})
export class HomeModule {}
