import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {
  public activeState:Boolean = true;
  public nameFieldState:Boolean = false;
  public firstButtonState:string = "entry";
  public entryTypeButtonState:string = "dot";

  public nameData: string = "";
  public groupingData: string = "";
  public dateTimeData: string = "";
  public dependenciesData: string = "";
  public assignedToData: string = "";

  public startDateTimeData: string = "";
  public endDateTimeData: string = "";

  public commentsData: string = "";
  public contactInformationData: string = "";  

  public expressionData: string = "";

  @Output() onModifyData = new EventEmitter<any>();

  updateBarState(selectedState: Boolean){
    this.activeState = selectedState;
  }

  updateRadioButtonState(panel: string, selectedState: string){
    if (panel == "first"){
      this.firstButtonState = selectedState;
    }
    else if (panel == "entryType"){
      this.entryTypeButtonState = selectedState;
    }

    
  }

  getInput(){
    let temp: string[];

    if (this.firstButtonState == "entry"){
      if (this.entryTypeButtonState == "dot"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.groupingData, this.dateTimeData, this.dependenciesData, this.assignedToData];
      }
      else if (this.entryTypeButtonState == "block"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.groupingData, this.startDateTimeData, this.endDateTimeData, this.dependenciesData, this.assignedToData];
      }
      else if (this.entryTypeButtonState == "person"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.groupingData, this.commentsData, this.contactInformationData];
      }

    }
    else if (this.firstButtonState == "pattern"){
      if (this.entryTypeButtonState == "dot"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.expressionData, this.groupingData, this.dateTimeData, this.dependenciesData, this.assignedToData];
      }
      else if (this.entryTypeButtonState == "block"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.expressionData, this.groupingData, this.startDateTimeData, this.endDateTimeData, this.dependenciesData, this.assignedToData];
      }
      else if (this.entryTypeButtonState == "person"){
        temp = ["modify", this.firstButtonState, this.entryTypeButtonState, this.nameData, this.expressionData, this.groupingData, this.commentsData, this.contactInformationData];
      }
    }


    this.onModifyData.emit(temp!);
  }

}
