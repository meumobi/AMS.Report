import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var ReactPivot: any;

@Component({
  selector: 'report-table',
  templateUrl: 'report-table.html',
})

export class ReportTableComponent implements AfterViewInit {

  @Input() title: string;
  @Input() rows: any[];

  @ViewChild('report') input: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    var htmlElement = this.input.nativeElement;

    var dimensions = [
      {value: 'annonceur', title: 'Annonceurs'},
      {value: 'format', title: 'Format'},
      {value: 'position', title: 'Position'},
      {value: 'site', title: 'Site'},
      {value: 'inventaire', title: 'Inventaire'}
    ];
    var reduce = function(row, memo) {
      memo.imprPrisesTotal = (memo.imprPrisesTotal || 0) + parseFloat(row['impressions prises']);
      memo.imprEnvoyeesTotal = (memo.imprEnvoyeesTotal || 0) + parseFloat(row['impressions envoyees']);
      memo.imprRecuesTotal = (memo.imprRecuesTotal || 0) + parseFloat(row['impressions reçues']);
      memo.revenuTotal = (memo.revenuTotal || 0) + parseFloat(row.revenu);
      memo.cpm = (1000 * memo.revenuTotal/memo.imprPrisesTotal);
      //memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
      //memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
      return memo
    };
    var calculations = [
      {
        value: 'imprPrisesTotal', title: 'Impr. prises',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprEnvoyeesTotal', title: 'Impr. envoyées',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprRecuesTotal', title: 'Impr. reçues',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'revenuTotal', title: 'Revenus',
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'cpm', title: 'CPM',
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      }
    ];

    ReactPivot(htmlElement, {
      rows: this.rows,
      dimensions: dimensions,
      calculations: calculations,
      reduce: reduce,
      activeDimensions: ['Annonceurs', 'Format'],
      nPaginateRows: 20
    })
  }
}
