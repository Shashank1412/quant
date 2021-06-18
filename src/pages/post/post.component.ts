import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postData: any = [{

    "item": "Headache pills",

    "itemCategory": "Medicine",

    "quantity": 5,

    "price": 50

  },

  {

    "item": "Sandwich",

    "itemCategory": "Food",

    "quantity": 2,

    "price": 200

  },

  {

    "item": "Perfume",

    "itemCategory": "Imported",

    "quantity": 1,

    "price": 4000

  },

  {

    "item": "Black Swan",

    "itemCategory": "Book",

    "quantity": 1,

    "price": 300

  },
  {

    "item": "Classical Songs Collection",

    "itemCategory": "Music",

    "quantity": 1,

    "price": 500

  },
  {

    "item": "Pants",

    "itemCategory": "Clothes",

    "quantity": 2,

    "price": 1200

  }
]

tableSetting: any = []
pageDetails:any = "";
constructor(private api:ApiServiceService) { }

ngOnInit(): void {
  // this.getPostList()
  this.pageDetails = 'post'
}
// getPostList(){
//   this.api.getListRequest('posts')
//   .subscribe((response: any) => {
//     console.log(response)
//     this.postData = response
//     console.log("key", this.tableSetting, response[0])
//   })
//   console.log("key", this.tableSetting)
// }
}
