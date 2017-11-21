/*
  rows[key] should be an array or string, 
  ie. if key = "scope" and rows[0].scope = ["admin", "editor"]
  filterBy(rows, "scope", "editor") return all elements whose scope includes "editor"
  ie. if key = "scope" and rows[0].role = "editor"
  filterBy(rows, "scope", "editor") return all elements whose scope equals "editor"
*/

export function filterBy(rows: any[], key: string, value: string): any[] {
  let filteredRows: any[] = rows.filter(function(col){
    if (col[key] instanceof Array) {
      return 1 + col[key].indexOf(value);
    } else if (col[key] instanceof String) {
      return col[key] == value;
    } else {
      return false;
    }
  });

  return filteredRows;
}

export function groupRowsBy(rows: any[], field: string): any[] {
  let groupedRows: any[] = [];
  for (var record of rows) {
    let discriminator = record[field];
    if (!groupedRows[discriminator]) {
      groupedRows[discriminator] = [];
    }
    groupedRows[discriminator].push(record)
  }

  return groupedRows;
}

export function convertArrayOfObjectsToCSV(args) {  
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }
  columnDelimiter = args.columnDelimiter || ',';
  lineDelimiter = args.lineDelimiter || '\n';

  keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export function downloadCSV(args) {  
  var data, filename, link;
  var csv = args.csv;  
  if (csv == null) return;
  filename = args.filename || 'export';
  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  data = encodeURI(csv);
  link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename + ".csv");
  link.click();
}

