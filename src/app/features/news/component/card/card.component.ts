import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() content: any;
  @Output() onClickArticle = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void { }

  openArticle(article: any) {
    this.onClickArticle.emit(article);
  }

}
