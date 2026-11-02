import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etiqueta-categoria',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [class.destacat]="esDestacat">
      {{ categoria }}
    </span>
  `,
  styles: [`
    .badge {
      background-color: #e2e8f0;
      color: #334155;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .destacat {
      background-color: #fef08a;
      color: #854d0e;
    }
  `]
})
export class EtiquetaCategoriaComponent {
  @Input() categoria: string = '';
  @Input() esDestacat: boolean = false;
}