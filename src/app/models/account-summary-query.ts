export class AccountSummaryQueryModel {
    ClientId = '0';
    CurrencyCode: string;
    ServiceLines: string[];
    SavingsTypes: string[];
    ContractStartMonth = '1';
    ContractStartYear: string;
    ContractEndMonth = '12';
    ContractEndYear: string;
    PeriodStartMonth = '1';
    PeriodStartYear: string;
    PeriodEndMonth = '12';
    PeriodEndYear: string;
    IsChild: string;
    ExclusionMonths: string;
    UseClientCurrency: string;
    CurrentUserId: string;

    constructor() {
        this.ServiceLines = [];
        this.SavingsTypes = [];
        this.UseClientCurrency = '0';
        this.ExclusionMonths = '0';
        this.IsChild = '0';
    }
}
