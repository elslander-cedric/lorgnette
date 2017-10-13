import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardListComponent } from './book-card-list.component';

describe('BookCardListComponent', () => {
  let component: BookCardListComponent;
  let fixture: ComponentFixture<BookCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
