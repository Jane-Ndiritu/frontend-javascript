import rowid from 'interface';
import RowElement from 'interface';    
import * as crud from 'crud';

const newRowId = crud.insertRow({ name: "John", age: 30 });
crud.deleteRow(123);
crud.updateRow(456, { name: "Jane", age: 31 });