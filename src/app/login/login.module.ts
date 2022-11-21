import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../features/shared/shared.module';
@NgModule({
  declarations: [LoginComponent, LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
