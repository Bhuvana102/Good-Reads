import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBooksComponent } from './genre-books.component';

describe('GenreBooksComponent', () => {
  let component: GenreBooksComponent;
  let fixture: ComponentFixture<GenreBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
