import { Component, OnInit } from '@angular/core';
import { LookupModel, InitiativeReportModel, ColumnSetting } from 'src/app/models';
import { ApiService, InitiativeService } from 'src/app/services';
import { AppConfig } from 'src/app/configs';

@Component({
  selector: 'app-global-initiatives-report',
  templateUrl: './global-initiatives-report.component.html',
  styleUrls: ['./global-initiatives-report.component.scss']
})
export class GlobalInitiativesReportComponent implements OnInit {
  clients: LookupModel[] = [];
  selectedClient = new LookupModel('Select Client', '0');
  loading = false;
  initiatives: InitiativeReportModel[] = [];
  gridColumns: ColumnSetting[] = [];

  constructor(private api: ApiService, private initiativeService: InitiativeService) {
    this.gridColumns = initiativeService.getGridColumns();
  }

  ngOnInit() {
    this.getGridData('0');
    this.getClients();
  }

  getClients() {
    this.api.get('lookup/getclients')
    .subscribe((data: LookupModel[]) => {
      this.clients = data;
      this.clients.unshift(this.selectedClient);
    });
  }

  getGridData(clientId: string) {
    if (!clientId || clientId === '0') {
      this.loading = false;
      return;
    }

    this.loading = true;
    this.initiatives = [];
    this.api.get('initiatives/client-initiatives/' + clientId)
      .subscribe((data: InitiativeReportModel[]) => {
        this.loading = false;
        this.initiatives = data;
        this.initiatives.forEach(item => {
          item.url = AppConfig.hostname + item.url;
        });
      });
  }

  selectionChange(value: any): void {
    console.log('selectionChange', value);
    this.getGridData(value.code);
  }
}
