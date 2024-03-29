import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsuperiorComponent } from './csuperior.component';

describe('CsuperiorComponent', () => {
  let component: CsuperiorComponent;
  let fixture: ComponentFixture<CsuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsuperiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
