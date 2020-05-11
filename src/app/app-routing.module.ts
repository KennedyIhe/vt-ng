import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalUsersReportComponent } from './components/global-reports/global-users-report/global-users-report.component';
import { GlobalReportsPageComponent } from './pages/global-reports-page/global-reports-page.component';


const routes: Routes = [
  { path: 'ValueTrack/app', component: GlobalUsersReportComponent },
  { path: 'app', component: GlobalUsersReportComponent },
  { path: 'app/global-reports', component: GlobalReportsPageComponent },
  { path: 'app/global-reports/:name', component: GlobalReportsPageComponent },
  { path: 'ValueTrack/app/global-reports/:name', component: GlobalReportsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
