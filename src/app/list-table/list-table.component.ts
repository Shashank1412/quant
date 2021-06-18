import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  p: number = 1;
  addproduct:any = []
  @Input('list') list: any = [];
  @Input('pageDetails') pageDetails:any = "";
  // @Input('tableHeading') tableHeading: any = [];
  tableHeading:any = [];
  @Output() toggleAudienceDataEvent = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.tableHeading = []
    for (let key in this.list[0]) {
      this.tableHeading.push(key)
    }
    console.log("ListTablekey===>",this.list[0],this.tableHeading)
  }

  addCartEvent(record,i){
    console.log(record, i, this.addproduct, this.list, )
    this.list.splice(i, 1)
    this.addproduct.push(record)

    localStorage.setItem('addproduct', JSON.stringify (this.addproduct))
  }

  removeAddCart(record,i){
    this.list.splice(i, 1)
    this.addproduct.push(record)

    localStorage.setItem('addproduct', JSON.stringify(this.addproduct))
  }

}
