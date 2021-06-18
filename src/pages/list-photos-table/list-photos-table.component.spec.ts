import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotosTableComponent } from './list-photos-table.component';

describe('ListPhotosTableComponent', () => {
  let component: ListPhotosTableComponent;
  let fixture: ComponentFixture<ListPhotosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhotosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhotosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
