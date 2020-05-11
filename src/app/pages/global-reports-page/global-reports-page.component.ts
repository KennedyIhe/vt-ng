import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-global-reports-page',
  templateUrl: './global-reports-page.component.html',
  styleUrls: ['./global-reports-page.component.scss']
})
export class GlobalReportsPageComponent implements OnInit {
  reportName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.reportName = params.get('name');
    });
  }

}
