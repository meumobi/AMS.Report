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
    var fields = Object.keys(this.raws);

    for (var field of fields) {
      this.report[field] = this.fillReport(field);
      this.sumTotal(this.report[field].revenue, this.report[field].impressions);
    }
  }

  sumTotal(rev, imps) {
    this.report['Total'] = {
      revenue: this.report['Total'] ? this.report['Total'].revenue + rev : rev,
      impressions: this.report['Total'] ? this.report['Total'].impressions + imps : imps
    }
  }

  sum(field: string, arr) {
    var total = arr.reduce( function( prevVal, elem ) {
      return prevVal + elem[field];
    }, 0 );
    return total;
  }

  fillReport(group: string) {
    var total = {
      revenue: this.sum('revenu', this.raws[group]),
      impressions: this.sum('impressions prises', this.raws[group])
    }

    return total;
  }
}
