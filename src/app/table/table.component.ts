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
  @Output() onClickEdit = new EventEmitter<boolean>;
  @Output() onClickDelete = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  public edit(): void {
    this.onClickEdit.emit(true);
  }

  public delete(id: number): void {
    this.onClickDelete.emit(id);
  }

}
