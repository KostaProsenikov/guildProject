import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() cardTitle: string | undefined;
  @Input() xmlIcons: string[] | undefined;

  @Output() buttonIsClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    // console.log('ItemComponent is running!');
  }

  public buttonClick(event: any): void {
    console.log('item component', event);
    const randomNum = Math.floor(Math.random() * 100);
    this.buttonIsClicked.emit(randomNum.toString());
  }
}
