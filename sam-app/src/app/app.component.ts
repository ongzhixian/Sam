import { Component } from '@angular/core';
import { Supplier } from './modules/supplier/entities/supplier';


export const SUPPLIERS: Supplier[] = [
  { id: "12", name: 'Dr. Nice' },
  { id: "13", name: 'Bombasto' },
  { id: "14", name: 'Celeritas' },
  { id: "15", name: 'Magneta' },
  { id: "16", name: 'RubberMan' },
  { id: "17", name: 'Dynama' },
  { id: "18", name: 'Dr. IQ' },
  { id: "19", name: 'Magma' },
  { id: "20", name: 'Tornado' }
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sam-app';
  suppliers = SUPPLIERS;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
