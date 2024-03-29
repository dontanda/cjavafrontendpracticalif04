import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinferiorComponent } from './cinferior.component';

describe('CinferiorComponent', () => {
  let component: CinferiorComponent;
  let fixture: ComponentFixture<CinferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinferiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
