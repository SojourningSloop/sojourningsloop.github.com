import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public activeState:Boolean = true;
  public nameFieldState:Boolean = false;
  public applicationState0:Boolean = false;
  public applicationState1:Boolean = false;

  public queryData: string = "";
  
  public visualizeFormatData: string = "";

  public exportFormatData: string = "";
  public nameData: string = "";
  public directoryData: string = "";

  public radioButtonState:string = "filter";

  @Output() onViewData =  new EventEmitter<any>();

  updateBarState(selectedState: Boolean){
    this.activeState = selectedState;
  }

  toggleState(selectedState: string){
    if (selectedState == "applicationState0"){
      this.applicationState0 = !this.applicationState0;
    }

    else if (selectedState == "applicationState1"){
      this.applicationState1 = !this.applicationState1;

      if (this.radioButtonState == "visualize" && this.applicationState1){
        this.getInput();
      }
    }


  }

  updateRadioButtonState(selectedState: string){
    this.radioButtonState = selectedState;
  }

  getInput(){
    console.log(this.radioButtonState);
    let temp: string[];

    if (this.radioButtonState == "filter"){
      temp = ["view", this.radioButtonState, this.queryData];
    }
    else if (this.radioButtonState == "visualize"){
      temp = ["view", this.radioButtonState, this.visualizeFormatData];
    }
    else if (this.radioButtonState == "export"){
      temp = ["view", this.radioButtonState, this.exportFormatData, this.nameData, this.directoryData];
    }
    this.onViewData.emit(temp!);
  }
}
