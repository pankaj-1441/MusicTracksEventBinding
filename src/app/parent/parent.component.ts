import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @Output()
  parentVar = new EventEmitter();

  ngOnInit() {
  }
  parentMethod(event) {
    console.log(event)
    this.parentVar.emit({data: event});
  }

}
