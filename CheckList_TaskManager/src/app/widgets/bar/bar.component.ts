import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  public activeState:Boolean = true;

  @Output() onStateChange = new EventEmitter<any>();

  toggleState(selectedState: boolean){
    this.activeState = selectedState;
    this.onStateChange.emit(this.activeState);
  }

}
