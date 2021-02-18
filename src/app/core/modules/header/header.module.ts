import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

const Components: any[] = [HeaderComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, MaterialModule],
  exports: [...Components],
})
export class HeaderModule {}
