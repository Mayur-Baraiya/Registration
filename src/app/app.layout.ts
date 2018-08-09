import { Component } from '@angular/core';
import { TemplateFormComponent } from '../app/Views/TemplateForm/templateform.component';
import { ReactiveFormComponent } from '../app/Views/ReactiveForm/reactiveform.component';



@Component({

    selector: 'AppLayout',
    template:`
        <div> 
            <ul class='nav nav-tabs'>
                <li><a [routerLink]="['/']">TemplateFormComponent</a></li>
                <li><a [routerLink]="['/ReactiveForm']">ReaciveFormComponent</a></li>
            </ul>
        </div>

        <router-outlet></router-outlet>

    `
})

export class AppLayout {
    title: string;

    constructor() {
        this.title = 'Registration';
    }
}