import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AboutUsComponent, NotFoundPageComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AboutUsComponent, NotFoundPageComponent],
})
export class SimplesModule {}
