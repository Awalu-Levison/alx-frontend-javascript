import { RowID, RowElement } from "./interface.ts"

export declare function insertRow(row:  rowElement): rowID;
export declare function deleteRow(rowID: rowID): void;
export declare function updateRow(rowID: rowID, row: rowElement): rowID;
