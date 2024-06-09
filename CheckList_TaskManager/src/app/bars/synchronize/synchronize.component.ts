import { Component } from '@angular/core';

@Component({
  selector: 'app-synchronize',
  templateUrl: './synchronize.component.html',
  styleUrls: ['./synchronize.component.css']
})
export class SynchronizeComponent {
  public activeState:Boolean = true;

  updateBarState(selectedState: Boolean){
    this.activeState = selectedState;
  }

}
