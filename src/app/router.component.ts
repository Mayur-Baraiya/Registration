import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TemplateFormComponent} from './Views/TemplateForm/templateform.component';
import {ReactiveFormComponent} from './Views/ReactiveForm/reactiveform.component';

export const routes: Routes = [
    { path: '', component: TemplateFormComponent },
    { path: 'ReactiveForm', component: ReactiveFormComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);