import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  commentData: any = []
  tableSetting: any = []
  pageDetails: any = "";
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getCommentList()
    this.pageDetails = 'user'
  }
  getCommentList() {
    this.api.getListRequest('users')
    .subscribe((response: any) => {
      console.log(response)
      this.commentData = response
      console.log("key", this.tableSetting, response[0])
    })
    console.log("key", this.tableSetting)
  }

}
