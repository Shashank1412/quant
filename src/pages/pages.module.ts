import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponentComponent } from './page-component/page-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { SharedModule } from 'src/shared/shared.module';
import { PostComponent } from './post/post.component';
import { ListTableComponent } from 'src/app/list-table/list-table.component';
import { ApiServiceService } from 'src/app/api-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditFormComponent } from 'src/app/edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ListPostTableComponent } from './list-post-table/list-post-table.component';
import { ListAlbumTableComponent } from './list-album-table/list-album-table.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { ListPhotosTableComponent } from './list-photos-table/list-photos-table.component';
import { TodolistComponent } from './todolist/todolist.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { NgxPaginationModule } from 'ngx-pagination'
@NgModule({
  declarations: [PageComponentComponent, HeaderComponentComponent, PostComponent, ListTableComponent, EditFormComponent, CommentFormComponent, ListPostTableComponent, ListAlbumTableComponent, AlbumFormComponent, PhotosFormComponent, ListPhotosTableComponent, TodolistComponent, EdittodoComponent, ListUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // SharedModule
    FormsModule
  ],

  entryComponents: [
    HeaderComponentComponent,
    ListTableComponent,
    EditFormComponent
  ],
  providers: [
    ApiServiceService
  ]
})
export class PagesModule { }
