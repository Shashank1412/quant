import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-list-album-table',
  templateUrl: './list-album-table.component.html',
  styleUrls: ['./list-album-table.component.css']
})
export class ListAlbumTableComponent implements OnInit {
  albumData: any = [];
  tableSetting: any = [];
  pageDetails: any = "";
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getAlbumsData()
    this.pageDetails = 'albums'
  }
  getAlbumsData() {
    this.api.getListRequest('albums')
      .subscribe((response: any) => {
        console.log(response)
        this.albumData = response
        console.log("key", this.tableSetting, response[0])
      })
    console.log("key", this.tableSetting)
  }
}
