import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
],
exports: [
  HeaderComponent,
  CardComponent,
  UserComponent,
  FooterComponent  
]
})
export class SharedModule { }
