import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {

  public textboxState:Boolean = false;
  public textboxValue:string = "";

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(this.textboxState){
      console.log(event["key"] + " : " + event["which"]);
      //let temp:string =  this.field;
      //console.log(temp)
      if (((48 <= event["which"] && event["which"] <= 57) || (65 <= event["which"] && event["which"] <= 90) || (event["which"] == 32)) && this.textboxValue.length < 17){
        this.textboxValue = this.textboxValue + event["key"];
      }
      else if (event["which"] === 8){
        this.textboxValue = this.textboxValue.slice(0, -1);
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

    /*else*/ if(selectedState == "textboxState"){
      this.textboxState = !this.textboxState;
    }
  }

}
