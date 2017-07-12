import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'report-header',
  templateUrl: 'report-header.html'
})
export class ReportHeaderComponent implements OnInit {

  @Input() 
  raws: any[];
  report: object = {};

  constructor() {}

  ngOnInit() {
    this.report = this.summarizeReport(this.raws);
  }

  summarizeReport(raws: any[]) {
    var fields = Object.keys(raws);
    var report = {};

    for (var field of fields) {
      let revenue = this.sum('revenu', raws[field]);
      let impressions = this.sum('impressions prises', raws[field]);

      report[field] = {
        revenue: revenue,
        impressions: impressions
      }
      report['Total'] = {
        revenue: report['Total'] ? report['Total'].revenue + revenue : revenue,
        impressions: report['Total'] ? report['Total'].impressions + impressions : impressions
      }
    }

    return report;
  }

  sum(field: string, arr) {
    var total = arr.reduce( function( prevVal, elem ) {
      return prevVal + parseFloat(elem[field]);
    }, 0 );

    return total;
  }
}
