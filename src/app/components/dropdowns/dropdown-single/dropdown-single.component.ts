import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LookupModel } from 'src/app/models';

@Component({
  selector: 'app-dropdown-single',
  templateUrl: './dropdown-single.component.html',
  styleUrls: ['./dropdown-single.component.scss']
})
export class DropdownSingleComponent implements OnInit {
  private LIST: LookupModel[] = [];
  private VALUE: string;
  private YESNO = false;
  @Input()  label: string;
  @Input()  readonly = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  set list(list: LookupModel[]) {
    this.LIST = list && list.length ? list : [];
    this.setSelected();
  }
  get list(): LookupModel[] { return this.LIST; }
  @Input()
  set value(value: string) {
    this.VALUE = value;
    this.setSelected();
  }
  get value(): string { return this.VALUE; }

  @Input()
  set isYesNo(val: boolean) {
    this.YESNO = val;
    if (val) {
      this.LIST = [];
      this.LIST.push(new LookupModel('Yes', '1'));
      this.LIST.push(new LookupModel('No', '0'));
      this.setSelected();
    }
  }
  get isYesNo(): boolean { return this.YESNO; }

  model: LookupModel;

  constructor() { }

  ngOnInit() {

  }

  onSelectChange(value: any) {
    this.selectChange.emit(value);
  }

  onValueChange(value: LookupModel) {
    this.value = value.code;
    this.valueChange.emit(value.code);
  }

  setSelected() {
    if (this.model && this.model.code === this.value) {
      return;
    }

    if (this.value && this.list.length) {
      for (const item of this.list) {
        if (item.code === this.value) {
          this.model = item;
          return;
        }
      }
    }
  }

}
