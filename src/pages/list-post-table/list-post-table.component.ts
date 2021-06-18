import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-list-post-table',
  templateUrl: './list-post-table.component.html',
  styleUrls: ['./list-post-table.component.css']
})
export class ListPostTableComponent implements OnInit {
  commentData: any = []
  tableSetting: any = [
    "items",
    "itemCategory",
    "price",
    "quantity"
  ]
  totalAmount:any = 0;
  tax:any = 0;
  discount:any = 0
  pageDetails: any = "";
  comments: string ="cart"
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getCommentList()
    this.pageDetails = 'cart'
  }
  getCommentList() {
    // this.api.getListRequest('comments')
    //   .subscribe((response: any) => {
    //     console.log(response)
    //     this.commentData = response
    //     console.log("key", this.tableSetting, response[0])
    //   })
    // console.log("key", this.tableSetting)
    this.commentData = JSON.parse(localStorage.getItem('addproduct'))
    for(var i = 0,l = this.commentData.length;i<l;i++){
      if (this.commentData[i].itemCategory == "Medicine" || this.commentData[i].itemCategory == "Food"){
        this.tax += 5
      }
      this.totalAmount += this.commentData[i].price
    }
    if(this.totalAmount > 2000){
      this.discount += 5
    }
  }

}
