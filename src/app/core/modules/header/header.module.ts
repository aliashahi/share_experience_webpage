import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const Components: any[] = [HeaderComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule],
  exports: [...Components],
})
export class HeaderModule {}
