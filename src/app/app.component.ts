import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Blog Project 17.03.';

  public buttonName: string | undefined;

  // public arrIcons: string[] = ["a"];

  ngOnInit() {
    console.log('App is running!');
  }

  public onButtonClick(event: string): void {
    console.log('event', event);
    this.buttonName = event;
  }
}
