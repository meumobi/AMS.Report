import { 
  Component,
  Input, 
  AfterViewInit, 
  ElementRef, 
  ViewChild,
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
    public translateService: TranslateService
  ) {}

  updateReport(rows) {
    let pivot = {
      dimensions: [],
      calculations: [],
      htmlElement: null,
      reduce: null,
      activeDimensions: ['Formats'] 
    };

    pivot.dimensions = this.getDimensions();
    pivot.calculations = this.getCalculations();
    pivot.reduce = this.getReduce();
    pivot.htmlElement = this.input.nativeElement;

    if (this.title == 'Premium') {
      pivot.activeDimensions = [this.translateService.instant('Campaigns')];
    }
    console.log(pivot);
    
    ReactPivot(pivot.htmlElement, {
      rows: rows,
      dimensions: pivot.dimensions,
      calculations: pivot.calculations,
      reduce: pivot.reduce,
      activeDimensions: pivot.activeDimensions,
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
        value: 'campagne', 
        title: 'Campaigns',
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

  getCalculations() {
    var calculations = [
      {
        value: 'imprEnvoyeesTotal', 
        title: 'Sent imps',
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'imprRecuesTotal', 
        title: 'Received imps',
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },      
      {
        value: 'imprPrisesTotal', 
        title: 'Paid imps',
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR');
        }
      },
      {
        value: 'cpmBrut',
        title: 'Gross CPM',
        scope: ['admin'], 
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'cpmNet',
        title: 'Net CPM',
        scope: ['admin','editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'revenuBrut',
        title: 'Gross revenues',
        scope: ['admin'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      ,
      {
        value: 'revenuNet',
        title: 'Net revenues',
        scope: ['admin', 'editor'],
        inventaire: ["Premium", "AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
        }
      },
      {
        value: 'fillRate',
        title: 'FillRate',
        scope: ['admin'],
        inventaire: ["AMS Market Place", "AdNetwork Fill"],
        template: function(val, row) {
          return val + ' %';
        }
      },
      {
        value: 'discrepencies',
        title: 'Discrepencies',
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
      memo.cpmBrut = (1000 * memo.revenuBrut/memo.imprPrisesTotal);
      memo.cpmNet = (1000 * memo.revenuNet/memo.imprPrisesTotal);
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
