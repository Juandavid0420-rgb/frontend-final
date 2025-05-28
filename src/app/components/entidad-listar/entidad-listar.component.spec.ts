import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadListarComponent } from './entidad-listar.component';

describe('EntidadListarComponent', () => {
  let component: EntidadListarComponent;
  let fixture: ComponentFixture<EntidadListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
