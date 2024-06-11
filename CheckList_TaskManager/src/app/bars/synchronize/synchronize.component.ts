import { Component } from '@angular/core';

@Component({
  selector: 'app-synchronize',
  templateUrl: './synchronize.component.html',
  styleUrls: ['./synchronize.component.css']
})
export class SynchronizeComponent {
  public activeState:Boolean = true;
  public results: string = "Ready to sync for 1 person.";

  updateBarState(selectedState: Boolean){
    this.activeState = selectedState;
  }

  triggerSyncResults(arg: any){
    if (arg){
      this.results = "Successfully updated Bob's Calendar!"
    }
    else{
      this.results = "Ready to sync for 1 person."
    }
  }

}
