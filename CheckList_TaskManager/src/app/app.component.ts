import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CheckList_TaskManager';
  public setCells: boolean = false;

  //public test: string[] = ["test", "test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test"];
  public test: string[] = [];

  private dotLabels: string[] = ["Name", "Grouping", "Date/Time", "Dependencies", "Assigned-To"];
  private blockLabels: string[] = ["Name", "Grouping", "Start-Date/Time", "End-Date/Time", "Dependencies", "Assigned-To"];
  private personLabels: string[] = ["Name", "Grouping", "Comments", "Contact Information"];
  //private pDotLabels: string[] = ["Name", "Grouping", "Date/Time", "Dependencies", "Assigned-To"];
  //private pBlockLabels: string[] = ["Name", "Grouping", "Start-Date/Time", "End-Date/Time", "Dependencies", "Assigned-To"];
  //private pPersonLabels: string[] = ["Name", "Grouping", "Comments", "Contact Information"];

  public tableIndex: number = 0;

  public visualizeState: Boolean = false;
  public filterState: Boolean = false;

  public database: {[id : string] : {[id : string] : string[];} } = 
    {"ID" : {"UnusedID": ["0"], "availableIDs" : []},
    "database" : {},
    "dot" : {},
    "block" : {},
    "person" : {},
    "pDot" : {},
    "pBlock" : {},
    "pPerson" : {}};


  outputData(arg: any){
    console.log(arg);
    if (arg[0] == "database"){
      this.database["ID"] = {"UnusedID": ["0"]};
      this.database["database"] = {"name" : arg[1], "description" : arg[2]};
    }
    else if (arg[0] == "modify"){
      if (arg[1] == "entry"){
        if (arg[2] == "dot"){
          //this.database["dot"][this.database["ID"]["UnusedID"][0]] = arg.slice(3);
          //this.database["ID"]["UnusedID"][0] = (Number(this.database["ID"]["UnusedID"][0]) + 1).toString();
          this.database["dot"][this.getNewID()] = arg.slice(3);
        }
        else if (arg[2] == "block"){
          this.database["block"][this.getNewID()] = arg.slice(3);
        }
        else if (arg[2] == "person"){
          this.database["person"][this.getNewID()] = arg.slice(3);
        }
      }
      else if (arg[1] == "pattern"){
        if (arg[2] == "dot"){
          this.database["pDot"][this.getNewID()] = arg.slice(3);
        }
        else if (arg[2] == "block"){
          this.database["pBlock"][this.getNewID()] = arg.slice(3);
        }
        else if (arg[2] == "person"){
          this.database["pPerson"][this.getNewID()] = arg.slice(3);
        }        
      }
    }
    console.log(this.database);

    //let temp: string[] = [];
    /*for (let i: number = 0; i < this.database["dot"].length; i++){
      temp = temp.concat()

    }*/


    let availablerows:number = 8;
    /*
    //Adding dot entries to cells
    this.test = this.test.concat(this.dotLabels);
    if (this.dotLabels.length < 8){
      let neededSpacers: number = (8 - this.dotLabels.length);
      for (let i: number = 0; i < neededSpacers; i++){
        this.test = this.test.concat("___");
      }
    }
    this.test = this.test.concat(this.database["dot"]);

    //Adding block entries to cells
    this.test = this.test.concat(this.blockLabels);
    this.filler(this.blockLabels, this.test);
    this.test = this.test.concat(this.database["block"]);
    */

    this.test = this.addToAppViewport(this.dotLabels, this.database["dot"]);
    this.test = this.test.concat(this.addToAppViewport(this.blockLabels, this.database["block"]));
    this.test = this.test.concat(this.addToAppViewport(this.personLabels, this.database["person"]));
    console.log(this.test);
    this.clearCells();
    this.updateCells();
  }

  outputStateChange(arg: any, id:string){
    console.log(id + " is now at state: " + arg)
  }

  updateVisualizeState(arg: any){
    this.visualizeState = arg;
  }

  updateFilterState(arg: any){
    this.filterState = arg;
  }

  clearCells(){
    var el = document.querySelector('#cell'); 
    while (el != null){
      el!.remove(); 
      el = document.querySelector('#cell'); 
    }
    this.setCells = false;

  }

  updateCells(){
    this.setCells = true;
  }

  filler(labels: string[], temp_app_viewport: string[]){
    if (labels.length < 8){
      let neededSpacers: number = (8 - labels.length);
      for (let i: number = 0; i < neededSpacers; i++){
        temp_app_viewport = temp_app_viewport.concat("___");
      }
    } 
  }

  rowFiller(row: string[]){
    if (row.length < 8){
      let neededSpacers: number = (8 - row.length);
      for (let i: number = 0; i < neededSpacers; i++){
        row = row.concat("___");
      }
    }
    return row;
  }

  getNewID(){
    console.log("New ID is: " + this.database["ID"]["UnusedID"][0]);
    let newID: string = this.database["ID"]["UnusedID"][0];
    this.incrementID();
    return newID;
  }

  incrementID(){
    this.database["ID"]["UnusedID"][0] = (Number(this.database["ID"]["UnusedID"][0]) + 1).toString();
  }

  addToAppViewport(labels: string[], data: {[id: string]: string[];}){
    let appViewPort: string[] = [];
    
    appViewPort = appViewPort.concat(this.rowFiller(labels));

    Object.entries(data).forEach(
      ([key, value]) => appViewPort = appViewPort.concat(this.rowFiller(value))
    );
    return appViewPort;
  }

  updateTableIndex(direction: string){
    if (0 < this.tableIndex ){
      
    }
  }
}
