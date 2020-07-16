import { Component, OnInit } from '@angular/core';

import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private _ds: DashboardService) { }

  users: any;

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this._ds.getDashboardData().subscribe(data => this.users = data);
  }
}
