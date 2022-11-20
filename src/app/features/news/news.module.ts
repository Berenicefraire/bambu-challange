import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news.routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [NewsComponent, 
    UserComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    FormsModule,
]
})
export class NewsModule { }
