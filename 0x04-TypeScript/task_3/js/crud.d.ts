import rowid from './0x04-TypeScript/task_3/interface';
import RowElement from './0x04-TypeScript/task_3/interface';

declare module 'crud' {
  interface RowElement {
    firstName: string;
    lastName: string;
    [key: string]: any; 
  }
  export function insertRow(row: RowElement): number;
  export function deleteRow(rowId: number): void;
  export function updateRow(rowId: number, row: RowElement): number;
}