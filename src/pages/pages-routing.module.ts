import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from 'src/app/edit-form/edit-form.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { ListAlbumTableComponent } from './list-album-table/list-album-table.component';
import { ListPhotosTableComponent } from './list-photos-table/list-photos-table.component';
import { ListPostTableComponent } from './list-post-table/list-post-table.component';
import { ListUserComponent } from './list-user/list-user.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PostComponent } from './post/post.component';
import { TodolistComponent } from './todolist/todolist.component';



const routes: Routes = [{
  path: '',
  component: PageComponentComponent,
  children: [
    { path: 'product', component: PostComponent, pathMatch: 'full'},
    { path: 'cart', component: ListPostTableComponent, pathMatch: 'full' },
    { path: 'albums', component: ListAlbumTableComponent, pathMatch: 'full' },
    { path: 'photos', component: ListPhotosTableComponent, pathMatch: 'full' },
    { path: 'todolist', component: TodolistComponent, pathMatch: 'full' },
    { path: 'list-user', component: ListUserComponent, pathMatch: 'full' },
    { path: 'edit-posts/:id', component: EditFormComponent, pathMatch: 'full' },
    { path: 'edit-comments/:id', component: CommentFormComponent, pathMatch: 'full' },
    { path: 'edit-albums/:id', component: AlbumFormComponent, pathMatch: 'full' },
    { path: 'edit-photos/:id', component: PhotosFormComponent, pathMatch: 'full' },
    { path: 'edit-todo/:id', component: EdittodoComponent, pathMatch: 'full' },
    { path: 'edit-users/:id', component: EditUserComponent, pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
