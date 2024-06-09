import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  @Output() onTrigger = new EventEmitter<any>();

  trigger(){
    this.onTrigger.emit(true);
  }

}
