import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirComponent } from './structuraldir.component';

describe('StructuraldirComponent', () => {
  let component: StructuraldirComponent;
  let fixture: ComponentFixture<StructuraldirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuraldirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuraldirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
