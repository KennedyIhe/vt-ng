import { Injectable } from '@angular/core';
import { LookupModel, ColumnSetting } from '../models';
import { AppConfig } from '../configs';

@Injectable({
    providedIn: 'root'
})
export class InitiativeService {

    constructor() {
    }

    getGridColumns(): ColumnSetting[] {
        let columns: ColumnSetting[] = [];
        columns = [
            { field: 'initiativeId', title: 'Display Name', type: 'text', width: 320, hidden: true },
            { field: 'clientName', title: 'Client', type: 'text', width: 250 },
            { field: 'industryName', title: 'Industry Type', type: 'text', width: 0 },
            { field: 'serviceLine', title: 'Service Line', type: 'text', width: 280 },
            { field: 'initiativeNumber', title: 'Initiative Number', type: 'text', width: 0, template: 'template' },
            { field: 'initiativeName', title: 'Initiative Name', type: 'text', width: 320 },
            { field: 'description', title: 'Description', type: 'text', width: 320 },
            { field: 'comments', title: 'Additional Comments', type: 'text', width: 250 },
            { field: 'commodityType', title: 'Commodity Type', type: 'text', width: 250 },
            { field: 'manager', title: 'Managed By', type: 'text', width: 200 },
            { field: 'createdBy', title: 'Created By', type: 'text', width: 200 },
            { field: 'createDate', title: 'Create Date', type: 'date', width: 320 },
            { field: 'sourceOfIdea', title: 'Source Of Idea', type: 'text', width: 200 },
            { field: 'clientRegion', title: 'Client Region', type: 'text', width: 0 },
            { field: 'country', title: 'Country', type: 'text', width: 0 },
            { field: 'subRegion', title: 'Sub Region', type: 'text', width: 0 },
            { field: 'isSavingRecurring', title: 'Saving Recurring', type: 'text', width: 0 },
            { field: 'savingsStartDate', title: 'Savings Start Date', type: 'date', width: 0 },
            { field: 'savingsEndDate', title: 'Savings End Date', type: 'date', width: 0 },
            { field: 'savingsLikelihood', title: 'Savings Likelihood', type: 'text', width: 0 },
            { field: 'currencyName', title: 'Currency', type: 'text', width: 0 },
            { field: 'clientAnnualBaseline', title: 'Client Annual Baseline', type: 'numeric', width: 0 },
            { field: 'actualAnnualBaseline', title: 'Actual Annual Baseline', type: 'numeric', width: 0 },
            { field: 'newAnnualContractCost', title: 'New Annual Contract Cost', type: 'numeric', width: 0 },
            { field: 'annualBaselineSavings', title: 'Annual Savings Against Baseline', type: 'numeric', width: 0 },
            { field: 'reconciledVariableCost', title: 'Variable Cost Reconciled At YearEnd', type: 'text', width: 0 },
            { field: 'hasGainShares', title: 'Gain Shares', type: 'text', width: 0 },
            { field: 'transactionsFees', title: 'Transactions Fees ', type: 'numeric', width: 0 },
            { field: 'transactionsClosed', title: 'Transactions Closed', type: 'numeric', width: 0 },
            { field: 'floorSpaced', title: 'Floor Spaced', type: 'numeric', width: 0 },
            { field: 'unitOfSpace', title: 'Unit Of Space', type: 'text', width: 0 },
            { field: 'breakdown', title: 'Breakdown', type: 'text', width: 0 },
            { field: 'nonFinancialValue', title: 'Non Financial Value', type: 'text', width: 0, hidden: true },
            { field: 'nonFinancialValueDesc', title: 'Non Financial Value Description', type: 'text', width: 0 },
            { field: 'valueToFeeRatio', title: 'Value To Fee Ratio', type: 'text', width: 0 },
            { field: 'nonFinancialEstValue', title: 'Non Financial Estimated Value', type: 'numeric', width: 0 },
            { field: 'nonFinancialFrequency', title: 'Non Financial Frequency', type: 'numeric', width: 0 },
            { field: 'incumbentSupplier', title: 'Incumbent Supplier', type: 'text', width: 0 },
            { field: 'winnerSupplier', title: 'Winner Supplier', type: 'text', width: 0 },
            { field: 'sourcingStrategy', title: 'Sourcing Strategy', type: 'text', width: 0 },
            { field: 'workflowStatus', title: 'Workflow Status', type: 'text', width: 0 },

        ];
        return columns;
    }

}
