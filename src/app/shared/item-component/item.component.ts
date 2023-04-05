import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  private _arr: any;
  private _cardTitle: any;

  @Input()
  set cardTitle(value: string) {
    // console.log('in setter of title', value);
    this._cardTitle = value;
  }

  get cardTitle() {
    return this._cardTitle;
  }

  @Input() xmlIcons: string[] | undefined;
  @Input()
  set arr(value: { username: string; address: { city: string } }[]) {
    // console.log('in setter:', value);
    this._arr = value;
  }

  get arr() {
    return this._arr;
  }
  // arr!: { username: string; address: { city: string } }[];

  @Output() buttonIsClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('in constructor:', this.arr);
  }

  ngOnInit() {
    // console.log('ItemComponent is running!');
    // console.log('in on init:', this.arr);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('in on changes:', changes);
  }

  public buttonClick(event: any): void {
    // console.log('item component', event);
    const randomNum = Math.floor(Math.random() * 100);
    this.buttonIsClicked.emit(randomNum.toString());
  }
}
