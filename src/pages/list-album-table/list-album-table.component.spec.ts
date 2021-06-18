import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumTableComponent } from './list-album-table.component';

describe('ListAlbumTableComponent', () => {
  let component: ListAlbumTableComponent;
  let fixture: ComponentFixture<ListAlbumTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlbumTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
