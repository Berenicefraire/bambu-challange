import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
],
exports: [
  SpinnerComponent,
  FontAwesomeModule,
  ModalComponent
]
})
export class SharedModule { }
