import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from '../../../app/router.component';
import { AppLayout } from '../../../app/app.layout';
import {ModuleWithProviders} from '@angular/core';


import { AppComponent } from '../../Views/Home/app.component';
import { TemplateFormComponent } from '../../Views/TemplateForm/templateform.component';
import { ReactiveFormComponent } from '../../Views/ReactiveForm/reactiveform.component';
import { RouterModule } from '../../../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AppLayout
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppLayout]
})
export class AppModule { }
