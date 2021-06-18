import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-list-photos-table',
  templateUrl: './list-photos-table.component.html',
  styleUrls: ['./list-photos-table.component.css']
})
export class ListPhotosTableComponent implements OnInit {
  commentData: any = []
  tableSetting: any = []
  pageDetails: any = "";
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getCommentList()
    this.pageDetails = 'photos'
  }
  getCommentList() {
    this.api.getListRequest('photos')
      .subscribe((response: any) => {
        console.log(response)
        this.commentData = response
        console.log("key", this.tableSetting, response[0])
      })
    console.log("key", this.tableSetting)
  }

}
