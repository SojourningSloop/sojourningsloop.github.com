import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @Output() onTrigger = new EventEmitter<any>();

  trigger(){
    this.onTrigger.emit(true);
  }

}
