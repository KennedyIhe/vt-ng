import { Injectable } from '@angular/core';
import { LookupModel } from '../models';
import { AppConfig } from '../configs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() {
  }

  getMonths(): LookupModel[] {
    const months: LookupModel[] = [];
    months.push(new LookupModel('January', '1'));
    months.push(new LookupModel('February', '2'));
    months.push(new LookupModel('March', '3'));
    months.push(new LookupModel('April', '4'));
    months.push(new LookupModel('May', '5'));
    months.push(new LookupModel('June', '6'));
    months.push(new LookupModel('July', '7'));
    months.push(new LookupModel('August', '8'));
    months.push(new LookupModel('September', '9'));
    months.push(new LookupModel('October', '10'));
    months.push(new LookupModel('November', '11'));
    months.push(new LookupModel('December', '12'));
    return months;
  }

  getYears(): LookupModel[] {
    const max = AppConfig.maxYearForReports || 2030;
    const years: LookupModel[] = [];
    let year = AppConfig.minYearForReports;
    while (year <= max) {
        years.push(new LookupModel(year.toString(), year.toString()));
        year++;
    }
    return years;
  }

}
