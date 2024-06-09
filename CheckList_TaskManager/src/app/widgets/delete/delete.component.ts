import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  @Output() onTrigger = new EventEmitter<any>();

  trigger(){
    this.onTrigger.emit(true);
  }

}
