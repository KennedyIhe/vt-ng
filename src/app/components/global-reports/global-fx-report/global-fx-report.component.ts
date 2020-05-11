import { Component, OnInit } from '@angular/core';
import { FxReportQuery, LookupModel, FxReportModel, ColumnSetting } from 'src/app/models';
import { LookupService, ApiService } from 'src/app/services';

@Component({
  selector: 'app-global-fx-report',
  templateUrl: './global-fx-report.component.html',
  styleUrls: ['./global-fx-report.component.scss']
})
export class GlobalFxReportComponent implements OnInit {
  query: FxReportQuery;
  gridColumns: ColumnSetting[] = [];
  months: LookupModel[] = [];
  years: LookupModel[] = [];
  clients: LookupModel[] = [];
  fxData: FxReportModel[] = [];
  loading = false;

  constructor(lookup: LookupService, private api: ApiService) {
    this.query = new FxReportQuery();
    this.query.StartMonth = '1';
    this.query.EndMonth = '12';
    this.query.StartYear = '2020';
    this.query.EndYear = '2020';
    this.query.ClientId = '0';
    this.months = lookup.getMonths();
    this.years = lookup.getYears();
    this.getClients();
    this.getData();
    this.setGridColumns();
   }

  ngOnInit() {
  }

  setGridColumns() {
    this.gridColumns = [
      {
        field: 'month',
        title: 'Month',
        type: 'text',
        width: 0
      },
      {
        field: 'year',
        title: 'Year',
        type: 'numeric',
        width: 0
      },
      {
        field: 'currency',
        title: 'Currency',
        type: 'text',
        width: 0
      },
      {
        field: 'monthEndRate',
        title: 'Rate Per USD',
        type: 'numeric',
        width: 0
      },
      {
        field: 'clientName',
        title: 'Client Name',
        type: 'text',
        width: 350
      }
    ];
  }

  getClients() {
    this.api.get('fxreport/fx-clients')
    .subscribe((data: LookupModel[]) => {
      this.clients = data;
    });
  }

  getData() {
    this.loading = true;
    this.fxData = [];
    const obj: FxReportQuery = JSON.parse(JSON.stringify(this.query));
    if (obj.ClientId === '0') {
      obj.ClientId = null;
    }

    this.api.post('fxreport/getreport', obj)
    .subscribe((data: FxReportModel[]) => {
      this.loading = false;
      this.fxData = data;
    });
  }
}
