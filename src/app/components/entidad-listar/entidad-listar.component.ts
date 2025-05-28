import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../models/entidadModels';
import { EntidadService } from '../../services/entidadService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entidad-listar',
  imports: [FormsModule],
  templateUrl: './entidad-listar.component.html',
  styleUrl: './entidad-listar.component.css'
})
export class EntidadListarComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit() {
    this.entidadService.listar().subscribe(data => {
      this.entidades = data;
    });
  }
}
