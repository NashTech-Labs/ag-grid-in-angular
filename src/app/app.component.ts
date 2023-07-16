import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

export interface Employee{
  "id": number;
  "employee_name": string;
  "employee_salary": number;
  "employee_age": number;
  "profile_image": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ag-grid-table';
  rowData!: Employee[];
  url: string = '/assets/tableData.json';

  public columnDefs: (ColDef | ColGroupDef)[] = [
    { field: 'id', headerName: 'Id', filter: 'agNumberColumnFilter', floatingFilter: true,suppressMenu: true,unSortIcon: true,},
    { field: 'employee_name', headerName: 'Name', filter: 'agTextColumnFilter', floatingFilter: true,suppressMenu: true,unSortIcon: true,},
    { field: 'employee_salary', headerName: 'Salary', filter: 'agNumberColumnFilter', floatingFilter: true,suppressMenu: true,unSortIcon: true, },
    { field: 'employee_age', headerName: 'Age', filter: 'agNumberColumnFilter', floatingFilter: true,suppressMenu: true,unSortIcon: true, },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    suppressMenu: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((res: any) => {
      this.rowData = res;
    });
  }
}
