import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  public activeState:Boolean = true;
  public nameFieldValue:string = "";
  public descTextboxValue:string = "";

  @Output() onDatabaseData = new EventEmitter<any>();

  //Make toggle state accept an argument specifying what variable to toggle (ex. nameFieldState, commentFieldState, activeState, etc.)
  updateBarState(selectedState: Boolean){
    this.activeState = selectedState;
  }

  getInput(){
    console.log("Current Input is: " + this.nameFieldValue);
    let output: string[] = ["database", this.nameFieldValue, this.descTextboxValue];
    this.onDatabaseData.emit(output);
  }
}
