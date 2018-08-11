import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    styleUrls: ['./reactiveform.component.css']
})

export class ReactiveFormComponent {
 frmTitle: string;
 Birthdate: number;
 Address: string;

 myForm: FormGroup;

 constructor(fb: FormBuilder) {
     this.frmTitle = 'Registration';

     this.myForm = fb.group({
        Birthdate: '',
        Address: '',
     });
 }
 SaveData(form: any) {
     console.log(form);
 }

   onLoginClick() {
        // this.router.navigate(['./home']);
        console.log(1111111, FB);
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                console.log('connected', response);
            } else {
                FB.login((loginResponse) => {
                     console.log('connected', loginResponse);
                });
            }
        });
    }

}