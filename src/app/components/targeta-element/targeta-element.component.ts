import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { EtiquetaCategoriaComponent } from '../etiqueta-categoria/etiqueta-categoria.component';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, EtiquetaCategoriaComponent],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element!: Element;
  @Output() seleccionat = new EventEmitter<Element>();

  onSelect() {
    this.seleccionat.emit(this.element);
  }
}