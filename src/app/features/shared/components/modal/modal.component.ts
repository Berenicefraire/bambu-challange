import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  faTimes = faTimes;
  @Input() canShow: boolean = false;
  @Output() onClose = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal() {
    this.onClose.emit(false);
  }

}
