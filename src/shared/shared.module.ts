import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ListTableComponent } from 'src/app/list-table/list-table.component';

@NgModule({
  declarations: [
    // ListTableComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
    entryComponents: [
    // ListTableComponent,
      FormsModule,
      ReactiveFormsModule,
  ],
})
export class SharedModule{ }
