import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  public applicationState = false;

  @Output() onApplyStateChange = new EventEmitter<any>();

  toggleState(selectedState: boolean){
    this.applicationState = selectedState;
    this.onApplyStateChange.emit(this.applicationState);
  }
  
}
