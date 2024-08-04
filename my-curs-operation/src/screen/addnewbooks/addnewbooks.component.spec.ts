import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbooksComponent } from './addnewbooks.component';

describe('AddnewbooksComponent', () => {
  let component: AddnewbooksComponent;
  let fixture: ComponentFixture<AddnewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
