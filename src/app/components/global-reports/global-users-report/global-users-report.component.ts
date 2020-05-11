import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LookupModel, UsersReportModel, ColumnSetting } from 'src/app/models';

@Component({
  selector: 'app-global-users-report',
  templateUrl: './global-users-report.component.html',
  styleUrls: ['./global-users-report.component.scss']
})
export class GlobalUsersReportComponent implements OnInit {

  gridColumns: ColumnSetting[] = [];
  apiPath = 'usersreport/getglobalreport';
  clients: LookupModel[] = [];
  users: UsersReportModel[] = [];
  selectedClient = new LookupModel('All Clients', '0');
  loading = false;

  constructor(private api: ApiService) {
    this.setGridColumns();
    this.getGridData(null);
    this.getClients();
   }

  ngOnInit() {
    const hostname = window.location.hostname === "localhost" ? "/ValueTrack" : "";
    console.log(hostname);
  }

  setGridColumns() {
    this.gridColumns = [
      {
        field: 'displayName',
        title: 'Display Name',
        type: 'text',
        width: 320
      },
      {
        field: 'firstName',
        title: 'First Name',
        type: 'text',
        width: 150
      },
      {
        field: 'lastName',
        title: 'Last Name',
        type: 'text',
        width: 150
      },
      {
        field: 'emailAddress',
        title: 'Email Address',
        type: 'text',
        width: 280
      },
      {
        field: 'roleName',
        title: 'Role Name',
        type: 'text',
        width: 200
      },
      {
        field: 'clientName',
        title: 'Client Name',
        type: 'text',
        width: 200
      },
      {
        field: 'clientStatus',
        title: 'Client Status',
        type: 'text',
        width: 150
      },
      {
        field: 'networkName',
        title: 'Network Name',
        type: 'text',
        width: 250
      },
      {
        field: 'phoneNumber',
        title: 'Phone Number',
        type: 'text',
        width: 200
      },
      {
        field: 'lastLogin',
        title: 'Last Login',
        type: 'text',
        width: 200
      },
      {
        field: 'isEnabled',
        title: 'Enabled',
        type: 'text',
        width: 100
      },
      {
        field: 'isDeleted',
        title: 'Deleted',
        type: 'text',
        width: 100
      }
    ];
  }

  getClients() {
    this.api.get('lookup/getclients')
    .subscribe((data: LookupModel[]) => {
      this.clients = data;
      this.clients.unshift(this.selectedClient);
    });
  }

  getGridData(clientId: string) {
    this.loading = true;
    this.users = [];
    if (this.apiPath) {
      this.api.get(this.getApiUrl(clientId || this.selectedClient.code))
        .subscribe((data: UsersReportModel[]) => {
          this.loading = false;
          this.users = data;
        });
    }
  }

  selectionChange(value: any): void {
    console.log('selectionChange', value);
    this.getGridData(value.code);
  }

  getApiUrl(clientId: string) {
    return !clientId || clientId === '0'
      ? 'usersreport/getglobalreport'
      : `usersreport/getclientreport/${clientId}`;
  }

}
