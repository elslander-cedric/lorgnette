import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBarCodeScannerComponent } from './book-bar-code-scanner.component';

describe('BookBarCodeScannerComponent', () => {
  let component: BookBarCodeScannerComponent;
  let fixture: ComponentFixture<BookBarCodeScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBarCodeScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBarCodeScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
