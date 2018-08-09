import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
    selector: 'app-templateform',
    templateUrl: './templateform.component.html',
    styleUrls: ['./templateform.component.css']
})

export class TemplateFormComponent {
 frmTitle: string;

 name: string;
 email: string;
 mobile: number;
 myForm: FormGroup;

 hid1:Boolean=false;

 hid2:Boolean=true;
 constructor(fb: FormBuilder) {
     this.frmTitle = 'Registration';

     this.name = '';
     this.email = '';
     this.mobile = 0;
     this.myForm = fb.group({
         
        Birthdate: '',
        Address: '',

     }) 
 }

 SaveData1(form: any) {
     console.log(form);
     this.hid2=false;
     this.hid1=true;
 }

 SaveData(form: any) {
    console.log(form);
}
 
}