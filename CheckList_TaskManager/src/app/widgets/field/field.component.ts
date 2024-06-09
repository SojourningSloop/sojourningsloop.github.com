import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  public fieldState:Boolean = false;
  public fieldValue:string = "";

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(this.fieldState){
      console.log(event["key"] + " : " + event["which"]);
      //let temp:string =  this.field;
      //console.log(temp)
      if (((48 <= event["which"] && event["which"] <= 57) || (65 <= event["which"] && event["which"] <= 90) || (event["which"] == 32)) && this.fieldValue.length < 17){
        this.fieldValue = this.fieldValue + event["key"];
      }
      else if (event["which"] === 8){
        this.fieldValue = this.fieldValue.slice(0, -1);
      }

    }
  }

  toggleState(selectedState: string){
    /*if (selectedState == "activeState"){
      this.activeState = !this.activeState;

      if (!this.activeState){
        this.fieldState = false;
      }
    }*/

    /*else*/ if(selectedState == "fieldState"){
      this.fieldState = !this.fieldState;
    }
  }


}
