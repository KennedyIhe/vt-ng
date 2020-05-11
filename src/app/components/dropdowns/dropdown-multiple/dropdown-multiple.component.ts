import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LookupModel } from 'src/app/models';

@Component({
  selector: 'app-dropdown-multiple',
  templateUrl: './dropdown-multiple.component.html',
  styleUrls: ['./dropdown-multiple.component.scss']
})
export class DropdownMultipleComponent implements OnInit {
  private LIST: LookupModel[] = [];
  private VALUES: string[] = [];
  @Input()  label: string;
  @Input()  readonly = false;
  // @Input()  selectAllText = 'Select All';
  @Output() valuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  set list(list: LookupModel[]) {
    this.LIST = list && list.length ? list : [];
    // if (arr.length) {
    //   arr.unshift(new LookupModel('all', `All ${this.label}`));
    // }
    // this.LIST = arr;
  }
  get list(): LookupModel[] { return this.LIST; }
  @Input()
  set values(values: string[]) {
    this.VALUES = values && values.length ? values : [];
  }
  get values(): string[] { return this.VALUES; }

  selectedItems: LookupModel;
  constructor() { }

  ngOnInit() {
  }

  onSelectChange(value: any) {
    this.selectChange.emit(value);
  }

  onValueChange(values: LookupModel[]) {
    this.values = [];
    if (values.length) {
      for (const item of values) {
        this.values.push(item.code);
      }
    }
    this.valuesChange.emit(this.values);
  }
}
