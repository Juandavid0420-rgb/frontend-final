import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadInsertarComponent } from './entidad-insertar.component';

describe('EntidadInsertarComponent', () => {
  let component: EntidadInsertarComponent;
  let fixture: ComponentFixture<EntidadInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
