import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicService } from '../music.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service: MusicService) { }

  @Output()
  childVar = new EventEmitter();

  tracks = []


  ngOnInit() {
    console.log(this.service.letsCreateAnotherMethod());

    this.service.getTracks().subscribe((data: any) => {
      this.tracks = data.tracks.track
    })
  }

  childMethod(data) {
    console.log(data);
    this.childVar.emit({"data": data})
  }

}
