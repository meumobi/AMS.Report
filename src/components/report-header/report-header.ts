import { 
  Component,
  Input, 
  OnInit,
  OnChanges,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'report-header',
  templateUrl: 'report-header.html'
})
export class ReportHeaderComponent implements OnInit, OnChanges {

  @Input() 
  raws: any[];

  report: any[];

  constructor() {}

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
      // only run when property "data" changed
      console.log('ngOnChanges report-header');
      if (changes['raws']) {
        console.log('Data changed');

        this.report = this.summarizeReport(this.raws); 
        //this.groupPosts = this.groupByCategory(this.data);
      }
  }

  summarizeReport(raws: any[]) {
    if (!raws) return;

    var fields = Object.keys(raws);
    var report = [];

    for (var field of fields) {
      let revenue = this.sum('revenu net', raws[field]);
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
