import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostTableComponent } from './list-post-table.component';

describe('ListPostTableComponent', () => {
  let component: ListPostTableComponent;
  let fixture: ComponentFixture<ListPostTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
