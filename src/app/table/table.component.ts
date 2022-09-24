import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headerTable?: string[] = ['id', 'firstname', 'lastname', 'country']
  @Input() dataSource?: User[]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        country: 'USA'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thorn',
        country: 'Australia'
      },
      {
        id: 3,
        firstName: 'Tangtai',
        lastName: 'Vanis',
        country: 'Thailand'
      },
    ]
  }

}
