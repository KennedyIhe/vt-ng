import { Component, OnInit, Input } from '@angular/core';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-value-track-grid',
  templateUrl: './value-track-grid.component.html',
  styleUrls: ['./value-track-grid.component.scss']
})
export class ValueTrackGridComponent implements OnInit {
  private _id = '';
  private _data: any[] = [];
  @Input() loading = false;
  @Input() columns: ColumnSetting[] = [];
  @Input()
  set data(data: any[]) {
    this._data = data;
    this.resetState();
    this.resetGridData();
  }
  get data(): any[] {
    return this._data && this._data.length ? this._data : [];
  }

  @Input()
  set id(id: string) {
    this._id = (id && id.trim()) || this._id;
  }
  get name(): string { return this._id; }

  elemHeight = '300';
  public state: State = {
    skip: 0,
    take: 200,
  };

  gridView: GridDataResult;
  sortConfig = {
    allowUnsort: true,
    mode: 'single'
  };

  constructor(private api: ApiService) {
    this._id = `vt-grid-${new Date().getMilliseconds()}`;
  }

  ngOnInit() {
    // this.getGridData();
    this.resetGridData();
  }

  // getGridData() {
  //   this.loadingData = true;
  //   this.data = [];
  //   if (this.apiPath) {
  //     this.api.get(this.apiPath)
  //       .subscribe((data: any[]) => {
  //         this.loadingData = false;
  //         this.data = data;
  //         this.resetGridData();
  //       });
  //   }
  // }

  resetState() {
    this.state = {
      skip: 0,
      take: 200,
    };
  }

  resetGridData() {
    this.gridView = process(this.data, this.state);
    this.setHeight();
  }

  setHeight() {
    const elem = document.getElementById(this.id);
    if (elem) {
      const offsetTop = elem.offsetTop || elem.parentElement.offsetTop;
      const top = (offsetTop + 25);
      const offset = `${top}px`;
      elem.style.height = `calc(100vh - ${offset})`;
    }

  }

  protected pageChange({ skip, take }: PageChangeEvent): void {
    this.state.skip = skip;
    this.state.take = take;
    this.resetGridData();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.resetGridData();
  }
}
