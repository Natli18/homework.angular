import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'created'];
  dataSource = [];


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(res => {
      console.log(res);
      this.dataSource = res['tableData'].results;
    })
  }

  ngOnInit(): void {
  }

}
