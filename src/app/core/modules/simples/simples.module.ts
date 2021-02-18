import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const Components: any[] = [
  AboutUsComponent,
  NotFoundPageComponent,
  CarouselComponent,
];
@NgModule({
  declarations: [...Components],
  imports: [CommonModule, MaterialModule],
  exports: [...Components],
})
export class SimplesModule {}
