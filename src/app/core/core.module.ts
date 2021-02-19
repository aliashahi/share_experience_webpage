import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './modules/header/header.module';
import { MaterialModule } from './modules/material/material.module';
import { SimplesModule } from './modules/simples/simples.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    MaterialModule,
    SimplesModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HeaderModule,
    MaterialModule,
    SimplesModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
