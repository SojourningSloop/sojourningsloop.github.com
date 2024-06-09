import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ViewportComponent } from './viewport/viewport.component';
import { DatabaseComponent } from './bars/database/database.component';
import { ViewComponent } from './bars/view/view.component';
import { ModifyComponent } from './bars/modify/modify.component';
import { SynchronizeComponent } from './bars/synchronize/synchronize.component';
import { CreateComponent } from './widgets/create/create.component';
import { SelectComponent } from './widgets/select/select.component';
import { SaveComponent } from './widgets/save/save.component';
import { DeleteComponent } from './widgets/delete/delete.component';
import { ClearComponent } from './widgets/clear/clear.component';
import { ApplyComponent } from './widgets/apply/apply.component';
import { VisualizationComponent } from './widgets/visualization/visualization.component';
import { SynchronizationComponent } from './widgets/synchronization/synchronization.component';
import { FieldComponent } from './widgets/field/field.component';
import { TextboxComponent } from './widgets/textbox/textbox.component';
import { RadioButtonComponent } from './widgets/radio-button/radio-button.component';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './widgets/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ViewportComponent,
    DatabaseComponent,
    ViewComponent,
    ModifyComponent,
    SynchronizeComponent,
    CreateComponent,
    SelectComponent,
    SaveComponent,
    DeleteComponent,
    ClearComponent,
    ApplyComponent,
    VisualizationComponent,
    SynchronizationComponent,
    FieldComponent,
    TextboxComponent,
    RadioButtonComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
