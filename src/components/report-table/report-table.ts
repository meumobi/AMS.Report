import { 
  Component,
  Input, 
  AfterViewInit, 
  ElementRef, 
  ViewChild,
  OnInit,
  OnChanges, 
  SimpleChanges } from '@angular/core';

import { ItemService } from './../../providers/item.service';

declare var ReactPivot: any;

@Component({
  selector: 'report-table',
  templateUrl: 'report-table.html',
})

export class ReportTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() title: string;
  @Input() rows: any[];

  pivot = {
    dimensions: [],
    calculations: [],
    htmlElement: null,
    reduce: null 
  }
  // type = {premium, network}
  // access = {admin, editor}

  @ViewChild('report') input: ElementRef;

  constructor(
    public itemService: ItemService
  ) {}

  ngOnInit() {
    this.pivot.dimensions = this.getDimensions();
    this.pivot.calculations = this.getCalculations();
    this.pivot.reduce = this.getReduce();
  }

  ngOnChanges(changes: SimpleChanges) {
      // only run when property "data" changed
      console.log('ngOnChanges report-table');
      if (changes['rows']) {
        this.pivot.dimensions = this.getDimensions();
        this.pivot.calculations = this.getCalculations();
        this.pivot.reduce = this.getReduce();
        var htmlElement = this.input.nativeElement;
        this.pivot.htmlElement = htmlElement;
        console.log('Data changed'); 
        console.log(this.pivot); 
        this.updateReport(this.rows, this.pivot)
      }
  }

  updateReport(rows, pivot) {
    console.log('update Report');
    console.log(pivot); 
    ReactPivot(pivot.htmlElement, {
      rows: rows,
      dimensions: pivot.dimensions,
      calculations: pivot.calculations,
      reduce: pivot.reduce,
      activeDimensions: ['Partenaires', 'Formats'],
      nPaginateRows: 20
    })
  }


  getDimensions() {
    var dimensions = [
      {value: 'annonceur', title: 'Advertisers'},
      {value: 'partenaire', title: 'Partners'},
      {value: 'format', title: 'Formats'},
      {value: 'position', title: 'Positions'},
      {value: 'site', title: 'Sites'},
      {value: 'key', title: 'Keys'}
    ];

    dimensions.map((item) => {return this.itemService.translateField(item, 'title')});

    return dimensions;
  }

  getCalculations() {
    var calculations = [
      {
        value: 'imprEnvoyeesTotal', title: 'Sent imps',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprRecuesTotal', title: 'Received imps',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprPrisesTotal', title: 'Paid imps',
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'cpm', title: 'CPM',
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'revenuTotal', title: 'Revenues',
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'fillRate', title: 'FillRate',
        template: function(val, row) {
          return val + ' %';
        }
      },
      {
        value: 'discrepencies', title: 'Discrepencies',
        template: function(val, row) {
          return val + ' %';
        }
      }
    ];

    calculations.map((item) => {return this.itemService.translateField(item, 'title')});

    return calculations;
  }

  getReduce() {
    var reduce = function(row, memo) {
      memo.imprPrisesTotal = (memo.imprPrisesTotal || 0) + parseFloat(row['impressions prises']);
      memo.imprEnvoyeesTotal = (memo.imprEnvoyeesTotal || 0) + parseFloat(row['impressions envoyees']);
      memo.imprRecuesTotal = (memo.imprRecuesTotal || 0) + parseFloat(row['impressions reçues']);
      memo.revenuTotal = (memo.revenuTotal || 0) + parseFloat(row.revenu);
      memo.cpm = (1000 * memo.revenuTotal/memo.imprPrisesTotal);
      memo.fillRate = Number(100 * memo.imprPrisesTotal/memo.imprRecuesTotal).toFixed(2);
      memo.discrepencies = Number(100 * (1 - memo.imprRecuesTotal/memo.imprEnvoyeesTotal)).toFixed(2);
      return memo
    };

    return reduce;
  }

  ngAfterViewInit() {
    var htmlElement = this.input.nativeElement;
    this.pivot.htmlElement = htmlElement;

    this.updateReport(this.rows, this.pivot)
  }
}
