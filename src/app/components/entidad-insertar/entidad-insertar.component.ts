import { Component } from '@angular/core';
import { Entidad } from '../../models/entidadModels';
import { EntidadService } from '../../services/entidadService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entidad-insertar',
  imports: [FormsModule],
  templateUrl: './entidad-insertar.component.html',
  styleUrl: './entidad-insertar.component.css'
})
export class EntidadInsertarComponent {
  entidad: Entidad = { nit: '', nombre: '' };

  constructor(private entidadService: EntidadService) {}

  guardar() {
    this.entidadService.guardar(this.entidad).subscribe(() => {
      alert('Entidad guardada correctamente');
      this.entidad = { nit: '', nombre: '' }; 
    });
  }
}