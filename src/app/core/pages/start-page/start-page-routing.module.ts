import {NgModule} from '@angular/core';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RouterModule, Routes} from '@angular/router';
import {StartFormComponent} from './start-form/start-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const routes: Routes = [{
  path: '',
  component: StartFormComponent
},
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent, StartFormComponent],
  exports: [SignInComponent, SignUpComponent, StartFormComponent],
  imports: [RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
})

export class StartPageRoutingModule {
}
