import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageOptions } from 'src/models/page-options.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  public prev = "<<"
  public next = ">>"
  public pageDetail = ''
  public disable = { prev: true, next: false }

  @Input() pageOptions: PageOptions = { skip: 0, limit: 1, total: 0 };
  @Output() changePage = new EventEmitter<PageOptions>()
  constructor() { }

  ngOnInit(): void {
    this.setPageDetail()
    this.checkDisable()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageOptions']?.currentValue) {
      this.pageOptions = changes['pageOptions'].currentValue
      this.setPageDetail()
      this.checkDisable()
    }
  }

  private setPageDetail(): void {
    const { skip, limit, total } = this.pageOptions
    const firstItem = skip + 1 < total ? skip + 1 : total;
    const lastItem = skip + limit > total ? total : skip + limit;
    this.pageDetail = `${firstItem}-${lastItem} of ${total}`
  }

  private checkDisable(): void {
    const { skip, limit, total } = this.pageOptions
    this.disable.prev = skip === 0 ? true : false
    this.disable.next = skip + limit >= total ? true : false
  }

  public nextPage(): void {
    this.pageOptions.skip += this.pageOptions.limit;
    this.checkDisable()
    this.setPageDetail()
    this.changePage.emit(this.pageOptions)
  }

  public prevPage(): void {
    this.pageOptions.skip -= this.pageOptions.limit;
    this.checkDisable()
    this.setPageDetail()
    this.changePage.emit(this.pageOptions)
  }

}
