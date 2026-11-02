import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  // Model per al formulari
  filtreText: string = '';
  categoriaSeleccionada: string = '';

  // Llista d'opcions per al desplegable de categories
  categories: string[] = ['Novel·la', 'Ciència-ficció', 'Clàssic', 'Psicològica', 'Romàntica', 'Fantasia'];

  @Output() filtrarEvent = new EventEmitter<{ text: string, categoria: string }>();
  @Output() restablirEvent = new EventEmitter<void>();

  // Mètode per aplicar el filtre combinat
  aplicarFiltres() {
    this.filtrarEvent.emit({
      text: this.filtreText,
      categoria: this.categoriaSeleccionada
    });
  }

  // Mètode per restablir els filtres
  restablirFiltres() {
    this.filtreText = '';
    this.categoriaSeleccionada = '';
    this.restablirEvent.emit();
  }
}