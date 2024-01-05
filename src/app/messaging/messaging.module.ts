// messaging.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagingComponent } from './messaging.component';

@NgModule({
  declarations: [
    MessagingComponent,
    // Vous pouvez ajouter d'autres composants si nécessaire
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MessagingComponent,
    // Vous pouvez exporter d'autres composants si nécessaire
  ],
})
export class MessagingModule { }
