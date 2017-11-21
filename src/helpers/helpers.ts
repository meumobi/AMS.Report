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
