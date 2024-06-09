import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent {

  @Output() onTrigger = new EventEmitter<any>();

  trigger(){
    this.onTrigger.emit(true);
  }

}
