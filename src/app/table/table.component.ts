import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headerTable: string[] = [];
  @Input() dataSource: User[] = [];
  @Output() onClickEdit = new EventEmitter<number>;
  @Output() onClickDelete = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  public edit(id: number): void {
    this.onClickEdit.emit(id);
  }

  public delete(id: number): void {
    this.onClickDelete.emit(id);
  }

}
