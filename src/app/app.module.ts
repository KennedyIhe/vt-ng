import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersReportGridComponent } from './components/users-report-grid/users-report-grid.component';
import { ValueTrackGridComponent } from './components/value-track-grid/value-track-grid.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersReportGridComponent,
    ValueTrackGridComponent
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
