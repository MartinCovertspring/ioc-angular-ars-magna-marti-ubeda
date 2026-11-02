import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; 
import { Element } from '../../models/element.model';
import { ELEMENTS } from '../../dades mock/mock';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, BarraCercaComponent, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  llibres: Element[] = ELEMENTS;
  llibresFiltrats: Element[] = [...this.llibres];
  elementSeleccionat?: Element;

  filtrarElements(filtre: { text: string, categoria: string }) {
    const textBusca = filtre.text.toLowerCase();
    const catBusca = filtre.categoria;

    this.llibresFiltrats = this.llibres.filter(llibre => {
      const coincideixText = llibre.titol.toLowerCase().includes(textBusca);
      const coincideixCat = catBusca === '' || llibre.categoria === catBusca;
      return coincideixText && coincideixCat;
    });
  }

  // Restablir tots els filtres
  restablirFiltres() {
    this.llibresFiltrats = [...this.llibres];
  }

  seleccionarElement(element: Element) {
    this.elementSeleccionat = element;
  }
}