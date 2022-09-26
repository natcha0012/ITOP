import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageOptions } from 'src/models/page-options.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() headerTable: string[] = [];
  @Input() dataSource: User[] = [];
  @Input() pageOptions: PageOptions = { skip: 0, limit: 1, total: 0 };
  @Output() onClickEdit = new EventEmitter<number>();
  @Output() onClickDelete = new EventEmitter<number>();
  @Output() changePage = new EventEmitter<PageOptions>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageOptions']?.currentValue) {
      this.pageOptions = changes['pageOptions'].currentValue
    }
  }

  public edit(id: number): void {
    this.onClickEdit.emit(id);
  }

  public delete(id: number): void {
    this.onClickDelete.emit(id);
  }

  public updatePage(pageOptions: PageOptions): void {
    this.changePage.emit(pageOptions);
  }

}
