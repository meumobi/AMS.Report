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
import { filterBy } from '../../helpers/helpers';
import { TranslateService } from '@ngx-translate/core';

declare var ReactPivot: any;

@Component({
  selector: 'report-table',
  templateUrl: 'report-table.html',
})

export class ReportTableComponent implements AfterViewInit, OnChanges {

  @Input() title: string;
  @Input() role: string;
  @Input() rows: any[];

  @ViewChild('report') input: ElementRef;

  constructor(
    public itemService: ItemService,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
  }

  updateReport(rows) {
    let pivot = {
      dimensions: [],
      calculations: [],
      htmlElement: null,
      reduce: null 
    };

    pivot.dimensions = this.getDimensions();
    pivot.calculations = this.getCalculations();
    pivot.reduce = this.getReduce();
    pivot.htmlElement = this.input.nativeElement;

    ReactPivot(pivot.htmlElement, {
      rows: rows,
      dimensions: pivot.dimensions,
      calculations: pivot.calculations,
      reduce: pivot.reduce,
      activeDimensions: ['Formats'],
      nPaginateRows: 20
    })
  }

  getDimensions() {
    var dimensions = [
      {
        value: 'annonceur', 
        title: 'Advertisers',
        scope: ['admin', 'editor'],
        inventaire: ["Premium"],

      },
      {
        value: 'date', 
        title: 'Date',
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],

      },
      {
        value: 'partenaire', 
        title: 'Partners',
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
      },
      {
        value: 'format', 
        title: 'Formats',
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
      },
      {
        value: 'position', 
        title: 'Positions',
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
      },
      {
        value: 'site', 
        title: 'Sites',
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
      },
      {
        value: 'key', 
        title: 'Keys',
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
      }
    ];

    var dimensionsToDisplay = filterBy(dimensions, "scope", this.role);
    dimensionsToDisplay = filterBy(dimensionsToDisplay, "inventaire", this.title);

    dimensionsToDisplay.map((item) => {
      return this.itemService.translateField(item, 'title')
    });

    return dimensionsToDisplay;
  }

  getTranslation(value){
    this.translate.get(value).subscribe((res: string) => {
      value = res;
    });
    return value;
  }

  getCalculations() {
    var calculations = [
      {
        value: 'imprEnvoyeesTotal', 
        title: this.getTranslation('Sent imps'),
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprRecuesTotal', 
        title: this.getTranslation('Received imps'),
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },      
      {
        value: 'imprPrisesTotal', 
        title: this.getTranslation('Paid imps'),
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'cpm',
        title: this.getTranslation('CPM'),
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'revenuBrut',
        title: this.getTranslation('Gross revenues'),
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      ,
      {
        value: 'revenuNet',
        title: this.getTranslation('Net revenues'),
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'fillRate',
        title: this.getTranslation('FillRate'),
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val + ' %';
        }
      },
      {
        value: 'discrepencies',
        title: this.getTranslation('Discrepencies'),
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val + ' %';
        }
      }
    ];

    var columnsToDisplay = filterBy(calculations, "scope", this.role);
    columnsToDisplay = filterBy(columnsToDisplay, "inventaire", this.title);

    columnsToDisplay.map((item) => {
      return this.itemService.translateField(item, 'title')
    });

    return columnsToDisplay;
  }

  getReduce() {
    var reduce = function(row, memo) {
      memo.imprPrisesTotal = (memo.imprPrisesTotal || 0) + parseFloat(row['impressions prises']);
      memo.imprEnvoyeesTotal = (memo.imprEnvoyeesTotal || 0) + parseFloat(row['impressions envoyees']);
      memo.imprRecuesTotal = (memo.imprRecuesTotal || 0) + parseFloat(row['impressions reçues']);
      memo.revenuBrut = (memo.revenuBrut || 0) + parseFloat(row.revenu);
      memo.revenuNet = (memo.revenuNet || 0) + parseFloat(row['revenu net']);
      memo.cpm = (1000 * memo.revenuTotal/memo.imprPrisesTotal);
      memo.fillRate = Number(100 * memo.imprPrisesTotal/memo.imprRecuesTotal).toFixed(2);
      memo.discrepencies = Number(100 * (1 - memo.imprRecuesTotal/memo.imprEnvoyeesTotal)).toFixed(2);
      return memo
    };

    return reduce;
  }

  ngAfterViewInit() {
    this.updateReport(this.rows);
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges report-table');
      if (changes['rows'] || changes['role']) {
        console.log('Data changed'); 
        this.updateReport(this.rows)
      }
  }
}
