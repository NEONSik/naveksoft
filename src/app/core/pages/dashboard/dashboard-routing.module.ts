import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
];

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
    CommonModule],

})
export class DashboardRoutingModule {
}
