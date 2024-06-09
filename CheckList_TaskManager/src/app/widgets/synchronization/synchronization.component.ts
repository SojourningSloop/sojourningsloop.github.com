import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-synchronization',
  templateUrl: './synchronization.component.html',
  styleUrls: ['./synchronization.component.css']
})
export class SynchronizationComponent {

  @Output() onTrigger = new EventEmitter<any>();

  trigger(){
    this.onTrigger.emit(true);
  }

}
