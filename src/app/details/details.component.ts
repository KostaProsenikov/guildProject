import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  todo : number | undefined
  todos: any = [];
ngOnInit (){
  setTimeout(() => {

    this.todos = [
      {id: '1', title: "Title-1"},
      {id: '2', title: "Title-2"}
    ]
    
  }, 3000);
}
  

  

}
