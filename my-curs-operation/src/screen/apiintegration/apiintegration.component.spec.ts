import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiintegrationComponent } from './apiintegration.component';

describe('ApiintegrationComponent', () => {
  let component: ApiintegrationComponent;
  let fixture: ComponentFixture<ApiintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiintegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
