import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAttributesComponent } from './book-attributes.component';

describe('BookAttributesComponent', () => {
  let component: BookAttributesComponent;
  let fixture: ComponentFixture<BookAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
