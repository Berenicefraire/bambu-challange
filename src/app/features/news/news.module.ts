import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news.routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    FormsModule
]
})
export class NewsModule { }
