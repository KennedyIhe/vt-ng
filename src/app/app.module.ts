import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueTrackGridComponent } from './components/value-track-grid/value-track-grid.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GlobalReportsPageComponent } from './pages/global-reports-page/global-reports-page.component';
import { GlobalUsersReportComponent, AccountSummaryReportComponent, GlobalReportsListComponent,
  GlobalFxReportComponent } from './components/global-reports';
import { DropdownSingleComponent } from './components/dropdowns/dropdown-single/dropdown-single.component';
import { DropdownMultipleComponent } from './components/dropdowns/dropdown-multiple/dropdown-multiple.component';
import { GlobalInitiativesReportComponent } from './components/global-reports/global-initiatives-report/global-initiatives-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueTrackGridComponent,
    GlobalUsersReportComponent,
    AccountSummaryReportComponent,
    GlobalReportsPageComponent,
    GlobalReportsListComponent,
    DropdownSingleComponent,
    DropdownMultipleComponent,
    GlobalFxReportComponent,
    GlobalInitiativesReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropDownsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
