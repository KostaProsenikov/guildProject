import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Blog Project 17.03.';

  public buttonName: string | undefined;

  public arr = [
    { username: 'gosho', address: { city: 'sofia' } },
    { username: 'pesho', address: { city: 'plovdiv' } },
  ];

  public arr2: any = [];

  // public arrIcons: string[] = ["a"];

  ngOnInit() {
    console.log('App is running!');
  }

  public onButtonClick(event: string): void {
    this.arr2 = [
      ...this.arr,
      { username: 'losho', address: { city: 'burgas' } },
    ];

    this.arr[0].username = 'tzvetan';
    this.title = 'new Title';
    this.buttonName = event;
  }
}
