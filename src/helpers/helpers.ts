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