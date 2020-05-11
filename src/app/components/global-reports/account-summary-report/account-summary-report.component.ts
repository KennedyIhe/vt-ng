import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LookupModel, AccountSummaryQueryModel } from 'src/app/models';

@Component({
  selector: 'app-account-summary-report',
  templateUrl: './account-summary-report.component.html',
  styleUrls: ['./account-summary-report.component.scss']
})
export class AccountSummaryReportComponent implements OnInit {
  query: AccountSummaryQueryModel = new AccountSummaryQueryModel();
  clients: LookupModel[] = [];
  serviceLines: LookupModel[] = [];
  savingsTypes: LookupModel[] = [];
  months: LookupModel[] = [];
  years: LookupModel[] = [];
  exclusionMonths: LookupModel[] = [];
  currencies: LookupModel[] = [];
  showError = false;


  constructor(private api: ApiService) {
    this.getDropdowns();
    this.query.CurrentUserId = (document.getElementById('currentUserId') as HTMLInputElement).value;
  }

  ngOnInit() {
  }

  getDropdowns() {
    this.api.get('AccountSummary/get-search-dropdowns')
      .subscribe((data: any) => {
        if (data) {
          this.clients = data.clients;
          this.months = data.months;
          this.years = data.years;
          this.exclusionMonths = data.exclusionMonths;
          this.currencies = data.currencies;
          this.setDefault();
        }

      });
  }

  getSavingsTypes(clientId: string) {
    this.api.get('lookup/GetSavingsTypes/' + clientId)
      .subscribe((data: any) => {
        if (data && data.length) {
          this.savingsTypes = data;
        }
      });
  }

  getServiceLines(clientId: string) {
    this.api.get('lookup/GetServiceLines/' + clientId)
      .subscribe((data: any) => {
        if (data && data.length) {
          this.serviceLines = data;
        }
      });
  }

  clientChanged(value: LookupModel): void {
    this.query.SavingsTypes = [];
    this.query.ServiceLines = [];
    this.serviceLines = [];
    this.savingsTypes = [];
    this.getServiceLines(value.code);
    this.getSavingsTypes(value.code);
    const currentYear = new Date().getFullYear();
    this.query.ContractStartYear = (currentYear - 1).toString();
    this.query.ContractEndYear = currentYear.toString();
    this.query.PeriodStartYear = currentYear.toString();
    this.query.PeriodEndYear = currentYear.toString();
  }

  setDefault() {
    for (const item of this.currencies) {
      if (item.desc.toLocaleUpperCase() === 'USD') {
        this.query.CurrencyCode = item.code;
      }
    }
  }

  getSummary() {
    if (!this.query.ClientId ||
      !this.query.ServiceLines ||
      this.query.ClientId === '0' ||
      !this.query.ServiceLines.length ||
      !this.query.SavingsTypes ||
      !this.query.SavingsTypes.length) {
      this.showError = true;
      return;
    }

    this.showError = false;
    this.api.post('AccountSummary/summary-numbers', this.query)
      .subscribe((data: any) => {
        if (data) {
          console.log(data);
        }
      });



  }

}
