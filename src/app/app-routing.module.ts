import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { NewsModule } from './features/news/news.module';
// Components

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'auth/:t', loadChildren: () => import('./login/login.module').then(m => LoginModule)},
  {path: 'news', loadChildren: () => import('./features/news/news.module').then(m => NewsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
